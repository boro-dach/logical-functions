import React from 'react'
import { Toggle } from './ui/toggle'

interface ChooseInputValueProps {
  value: number
  onChange: (value: number) => void
}

const ChooseInputValue: React.FC<ChooseInputValueProps> = ({ value, onChange }) => {
  function handleInput() {
    const newValue: number = value === 0 ? 1 : 0
    onChange(newValue)
  }

  return (
    <div>
      <Toggle variant={'outline'} onClick={handleInput}>
        <p>{value}</p>
      </Toggle>
    </div>
  )
}

export default ChooseInputValue
