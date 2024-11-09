import React, { useEffect } from 'react'
import { Input } from './ui/input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { setInputsCount } from '@/app/features/inputsCountSlice'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'

const functionsMinMax = {
  AND: { min: 2, max: 10 },
  NAND: { min: 2, max: 10 },
  OR: { min: 2, max: 10 },
  NOR: { min: 2, max: 10 },
  XOR: { min: 2, max: 2 },
  NOT: { min: 1, max: 1 },
  YES: { min: 1, max: 1 },
}

const ChooseInputCount = () => {
  const dispatch = useDispatch()
  const inputsCount = useSelector((state: RootState) => state.inputsCount.count)
  const selectedFunction = useSelector(
    (state: RootState) => state.logicalFunction.value
  )

  const [actualMin, setActualMin] = React.useState<number>(0)
  const [actualMax, setActualMax] = React.useState<number>(0)

  useEffect(() => {
    if (selectedFunction && functionsMinMax[selectedFunction]) {
      const { min, max } = functionsMinMax[selectedFunction]
      setActualMin(min)
      setActualMax(max)
    }
  }, [selectedFunction])
  
  const options = []
  for (let i = actualMin; i <= actualMax; i++) {
    options.push(i)
  }

  const handleSelect = (value: number) => {
    dispatch(setInputsCount(value))
  }

  return (
    <div className='flex flex-row m-8 gap-4 items-center'>
      <p className='font-bold text-xl'>Počet vstupů:</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button>
                {inputsCount}
                <ChevronDown color='white'/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {options.map((option) => (
                <DropdownMenuItem key={option} onClick={() => handleSelect(option)}>
                {option}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ChooseInputCount
