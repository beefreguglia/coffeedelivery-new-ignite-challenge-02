import { Minus, Plus } from 'phosphor-react'
import { FormEvent, useState } from 'react'
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
  function changeValue(e: FormEvent<HTMLInputElement>) {
    if (Number(e.currentTarget.value) > 10) {
      setValue(10)
    } else if (Number(e.currentTarget.value) <= 0) {
      setValue(0)
    } else {
      setValue(Number(e.currentTarget.value))
    }
  }
  return (
    <InputContainer>
      <DecrementButton onClick={decressValue} disabled={value <= 0}>
        <Minus weight="bold" />
      </DecrementButton>
      <Input
        type="number"
        max="10"
        value={value}
        min="0"
        onChange={(e) => changeValue(e)}
      />
      <IncrementButton onClick={incressValue} disabled={value >= 10}>
        <Plus weight="bold" />
      </IncrementButton>
    </InputContainer>
  )
}
