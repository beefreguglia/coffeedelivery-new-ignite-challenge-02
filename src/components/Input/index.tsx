import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContainer, OptionalText, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMediumButton?: boolean
  isSmallButton?: boolean
  isOpcional?: boolean
  id: string
}

export default function Input({
  isMediumButton = false,
  isSmallButton = false,
  isOpcional = false,
  value,
  id,
  ...props
}: InputProps) {
  const { register } = useFormContext()
  return (
    <InputContainer
      isMediumButton={isMediumButton}
      isSmallButton={isSmallButton}
    >
      <StyledInput
        {...props}
        {...register(id, {
          valueAsNumber: props.type === 'number',
        })}
      />
      {isOpcional && value && <OptionalText>Opcional</OptionalText>}
    </InputContainer>
  )
}
