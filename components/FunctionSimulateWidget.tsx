'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardFooter, CardHeader } from './ui/card'
import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import ChooseInputCount from './ChooseInputCount';
import ChooseInputValue from './ChooseInputValue';

const functions = {
  AND: (values: number[]) => values.every(v => v === 1) ? 1 : 0,
  NAND: (values: number[]) => values.every(v => v === 1) ? 0 : 1,
  OR: (values: number[]) => values.some(v => v === 1) ? 1 : 0,
  NOR: (values: number[]) => values.some(v => v === 1) ? 0 : 1,
  XOR: (values: number[]) => values.reduce((a, b) => a ^ b, 0),
  NOT: (values: number[]) => values[0] === 1 ? 0 : 1,
  YES: () => 1
}

const FunctionSimulateWidget:React.FC = () => {
  const logicalFunction = useSelector((state: RootState) => state.logicalFunction.value);
  const inputsCount = useSelector((state: RootState) => state.inputsCount.count)
  const [inputValues, setInputValues] = useState<number[]>(Array(inputsCount).fill(0))
  const [output, setOutput] = useState<number | null>(null)

  useEffect(() => {
    setInputValues(Array(inputsCount).fill(0))
  }, [inputsCount])

  useEffect(() => {
    const calculateOutput = () => {
      const func = functions[logicalFunction as keyof typeof functions]
      if (func) {
        setOutput(func(inputValues))
      }
    }
    calculateOutput()
  }, [inputValues, logicalFunction])
  

  const handleInputChange = (index: number, value: number) => {
    setInputValues(prevValues => {
      const newValues = [...prevValues]
      newValues[index] = value
      return newValues
    })
  }

  return (
    <Card className='flex flex-col'>
        <CardHeader className='border-b'>
          <ChooseInputCount/>
          {[...Array(inputsCount)].map((_, index) => (
            <ChooseInputValue
            key={index}
            value={inputValues[index]}
            onChange={(value) => handleInputChange(index, value)}
            />
          ))}
        </CardHeader>
        <CardFooter className='m-4 mb-0'>
          <p className='text-lg'>Výstup: <span className='font-bold'>{output}</span></p>
        </CardFooter>
    </Card>
  )
};

export default FunctionSimulateWidget