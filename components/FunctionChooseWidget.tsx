'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const functionsDescriptions = {
    AND: 'and description',
    NAND: 'nand description',
    OR: 'or description',
    NOR: 'nor description',
    XOR: 'xor description',
    NOT: 'not description',
    YES: 'yes description'
}

const logicalFunctions: logicalFunctionsType[] = ['AND', 'NAND', 'OR', 'NOR', 'XOR', 'NOT', 'YES']

type logicalFunctionsType = 'AND' | 'NAND' | 'OR' | 'NOR' | 'XOR' | 'NOT' | 'YES'

const FunctionChooseWidget = () => {
    const [logicalFunction, setLogicalFunction] = useState<logicalFunctionsType>('AND')

    const handleSelectFunction = (func: logicalFunctionsType) => {
        setLogicalFunction(func);
      };
  return (
    <Card className='flex flex-col h-48'>
        <CardHeader className='flex flex-row items-center gap-8'>
            <h2 className='font-black text-3xl mt-1'>Choose a logical function:</h2>
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
            <p>{functionsDescriptions[logicalFunction]}</p>
        </CardContent>
    </Card>
  )
}

export default FunctionChooseWidget