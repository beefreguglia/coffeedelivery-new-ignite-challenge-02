import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import {
  DecrementButton,
  IncrementButton,
  Input,
  InputContainer,
} from './styles'

export default function NumberInput() {
  const [value, setValue] = useState(0)

  function incressValue() {
    setValue((state) => state + 1)
  }
  function decressValue() {
    setValue((state) => state - 1)
  }
  return (
    <InputContainer>
      <DecrementButton onClick={decressValue}>
        <Minus weight="bold" />
      </DecrementButton>
      <Input
        type="number"
        max="10"
        value={value}
        min="0"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <IncrementButton onClick={incressValue}>
        <Plus weight="bold" />
      </IncrementButton>
    </InputContainer>
  )
}
