import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  DecrementButton,
  IncrementButton,
  Input,
  InputContainer,
} from './styles'

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export default function NumberInput({ id, ...rest }: NumberInputProps) {
  const { register, setValue, watch } = useFormContext()
  const coffeeValue = watch(id)
  const isMaxValue = coffeeValue >= 10
  const isMinValue = coffeeValue <= 0

  function incresseValue() {
    setValue(id, coffeeValue + 1)
  }
  function decreesValue() {
    setValue(id, coffeeValue - 1)
  }

  return (
    <InputContainer>
      <DecrementButton
        type="button"
        onClick={decreesValue}
        disabled={isMinValue}
      >
        <Minus weight="bold" />
      </DecrementButton>
      <Input
        type="number"
        {...register(id, {
          valueAsNumber: true,
        })}
        {...rest}
      />
      <IncrementButton
        type="button"
        onClick={incresseValue}
        disabled={isMaxValue}
      >
        <Plus weight="bold" />
      </IncrementButton>
    </InputContainer>
  )
}
