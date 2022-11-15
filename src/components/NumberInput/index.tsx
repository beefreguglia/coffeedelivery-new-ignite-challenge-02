import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import {
  DecrementButton,
  IncrementButton,
  Input,
  InputContainer,
} from './styles'

interface NewOrderFormData {
  coffeeQuantity: number
}

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<NewOrderFormData>
}

export default function NumberInput({
  register,
  id,
  ...rest
}: NumberInputProps) {
  // function incresseValue() {
  //   setValue((state) => state + 1)
  // }
  // function decreesValue() {
  //   setValue((state) => state - 1)
  // }
  // function changeValue(e: FormEvent<HTMLInputElement>) {
  //   if (Number(e.currentTarget.value) > 10) {
  //     setValue(10)
  //   } else if (Number(e.currentTarget.value) <= 1) {
  //     setValue(1)
  //   } else {
  //     setValue(Number(e.currentTarget.value))
  //   }
  // }
  return (
    <InputContainer>
      <DecrementButton>
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

      <IncrementButton>
        <Plus weight="bold" />
      </IncrementButton>
    </InputContainer>
  )
}
