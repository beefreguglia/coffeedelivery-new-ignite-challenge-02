import { ReactNode } from 'react'
import { ButtonContainer, ButtonVariants, CartCounter } from './styles'

interface ButtonProps {
  children: ReactNode
  variant: ButtonVariants
  isLargeButton?: boolean
  isCart?: boolean
  cartQuantity?: number
}

export default function Button({
  children,
  variant,
  isLargeButton = false,
  isCart = false,
  cartQuantity = 0,
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} isLargeButton={isLargeButton}>
      {children}
      {isCart && cartQuantity !== 0 && (
        <CartCounter variant={variant}>{cartQuantity}</CartCounter>
      )}
    </ButtonContainer>
  )
}
