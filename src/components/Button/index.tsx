import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer, ButtonVariants, CartCounter } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: ButtonVariants
  isLargeButton?: boolean
  isCart?: boolean
  isSelected?: boolean
  cartQuantity?: number
}

export default function Button({
  children,
  variant,
  isLargeButton = false,
  isCart = false,
  isSelected = false,
  cartQuantity = 0,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      isLargeButton={isLargeButton}
      isSelected={isSelected}
      {...props}
    >
      {children}
      {isCart && cartQuantity !== 0 && (
        <CartCounter variant={variant}>{cartQuantity}</CartCounter>
      )}
    </ButtonContainer>
  )
}
