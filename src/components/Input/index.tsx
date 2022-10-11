import { InputHTMLAttributes } from 'react'
import { InputContainer, OptionalText, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMediumButton?: boolean
  isSmallButton?: boolean
  isOpcional?: boolean
}

export default function Input({
  isMediumButton = false,
  isSmallButton = false,
  isOpcional = false,
  value,
  ...props
}: InputProps) {
  return (
    <InputContainer
      isMediumButton={isMediumButton}
      isSmallButton={isSmallButton}
    >
      <StyledInput {...props} />
      {isOpcional && value && <OptionalText>Opcional</OptionalText>}
    </InputContainer>
  )
}
