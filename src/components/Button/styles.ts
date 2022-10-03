import styled from 'styled-components'

export type ButtonVariants =
  | 'purple'
  | 'yellow'
  | 'grey'
  | 'lightYellow'
  | 'lightPurple'

interface ButtonContainerProps {
  variant: ButtonVariants
  isLargeButton: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ variant, theme }) =>
    variant === 'purple' && theme['purple-900']};
  background-color: ${({ variant, theme }) =>
    variant === 'yellow' && theme['yellow-500']};
  background-color: ${({ variant, theme }) =>
    variant === 'grey' && theme['grey-400']};
  background-color: ${({ variant, theme }) =>
    variant === 'lightYellow' && theme['yellow-100']};
  background-color: ${({ variant, theme }) =>
    variant === 'lightPurple' && theme['purple-100']};
  border: none;
  border-radius: 8px;
  padding: ${({ isLargeButton }) =>
    isLargeButton ? '0.75rem 2.8rem' : '0.6rem'};
  color: ${({ theme, variant }) =>
    variant === 'grey' ? theme['grey-700'] : theme.white};
  color: ${({ theme, variant }) =>
    variant === 'lightPurple' && theme['purple-500']};
  color: ${({ theme, variant }) =>
    variant === 'lightYellow' && theme['yellow-500']};
  cursor: pointer;
  transition: 400ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  :hover {
    background-color: ${({ variant, theme }) =>
      variant === 'purple' && theme['purple-500']};
    background-color: ${({ variant, theme }) =>
      variant === 'yellow' && theme['yellow-900']};
    background-color: ${({ variant, theme }) =>
      variant === 'grey' && theme['grey-500']};
    background-color: ${({ variant, theme }) =>
      variant === 'lightYellow' && theme['yellow-500']};
    color: ${({ variant, theme }) =>
      variant === 'lightYellow' && theme['yellow-900']};
    background-color: ${({ variant, theme }) =>
      variant === 'lightPurple' && theme['purple-500']};
    color: ${({ variant, theme }) =>
      variant === 'lightPurple' && theme['purple-900']};
  }
`
export const CartCounter = styled.div<{ variant: ButtonVariants }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  border-radius: 50%;
  bottom: 25px;
  right: -1rem;
  z-index: 3;
  background-color: ${({ variant, theme }) =>
    variant === 'purple' && theme['purple-500']};
  background-color: ${({ variant, theme }) =>
    variant === 'yellow' && theme['yellow-900']};
  background-color: ${({ variant, theme }) =>
    variant === 'grey' && theme['grey-400']};
  background-color: ${({ variant, theme }) =>
    variant === 'lightYellow' && theme['yellow-900']};
  background-color: ${({ variant, theme }) =>
    variant === 'lightPurple' && theme['purple-500']};
  color: ${({ theme, variant }) =>
    variant === 'grey' ? theme['grey-700'] : theme.white};
`
