import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  DecrementButton,
  IncrementButton,
  Input,
  InputContainer,
} from './styles'

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function NumberInput({ id, ...rest }: NumberInputProps) {
  const { register, setValue, watch } = useFormContext()
  const coffeeValue = watch('coffeeQuantity')
  const isMaxValue = coffeeValue >= 10
  const isMinValue = coffeeValue <= 0
  function incresseValue() {
    setValue('coffeeQuantity', coffeeValue + 1)
  }
  function decreesValue() {
    setValue('coffeeQuantity', coffeeValue - 1)
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
      {register ? (
        <Input
          type="number"
          {...register('coffeeQuantity', {
            valueAsNumber: true,
          })}
          {...rest}
        />
      ) : (
        <Input type="number" {...rest} />
      )}

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
