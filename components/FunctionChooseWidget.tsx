'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store'
import { setLogicalFunction } from '../app/features/logicalFunctionSlice';

const functionsDescriptions = {
    AND: 'Funkce AND vrácí 1, pokud je na všech vstupech 1.',
    NAND: 'Funkce NAND je opačná k funkci AND. Vrácí 1, pokud není na všech vstupech 1.',
    OR: 'Funkce OR vrácí 1, pokud je alespoň na jednom vstupu 1.',
    NOR: 'Funkce NOR je opačná k funkci OR. Vrácí 1, pokud jsou na všech vstupech 0.',
    XOR: 'Funkce XOR (exkluzivní OR) vrací 1, pokud je počet vstupních hodnot 1 lichý.',
    NOT: 'Funkce NOT vrácí hodnotu opačnou ke vstupu.',
    YES: 'Funkce YES vždy vrácí 1.'
}

const logicalFunctions: logicalFunctionsType[] = ['AND', 'NAND', 'OR', 'NOR', 'XOR', 'NOT', 'YES']

type logicalFunctionsType = 'AND' | 'NAND' | 'OR' | 'NOR' | 'XOR' | 'NOT' | 'YES'

const FunctionChooseWidget:React.FC = () => {
    const dispatch = useDispatch();
    const logicalFunction = useSelector((state: RootState) => state.logicalFunction.value);

    const handleSelectFunction = (func: logicalFunctionsType) => {
        dispatch(setLogicalFunction(func));
      };
  return (
    <Card className='flex flex-col'>
        <CardHeader className='flex flex-row items-center gap-8'>
            <h2 className='font-black text-3xl mt-1'>Vyberte logickou funkci:</h2>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>{logicalFunction}<ChevronDown color='white'/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {logicalFunctions.map((func, index) => (
                        <DropdownMenuItem onClick={() => handleSelectFunction(func)} key={index}>{func}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </CardHeader>
        <CardContent>
            <p className='text-lg w-72 break-words'>{functionsDescriptions[logicalFunction]}</p>
        </CardContent>
    </Card>
  )
};

export default FunctionChooseWidget