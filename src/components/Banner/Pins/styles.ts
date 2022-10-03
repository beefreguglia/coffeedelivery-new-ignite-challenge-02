import styled from 'styled-components'

type PinColor = 'yellow' | 'lightYellow' | 'grey' | 'purple'

interface ImageContainerProps {
  variant: PinColor
}

export const PinsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 4.125rem;
`
export const PinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  p {
    color: ${({ theme }) => theme['grey-700']};
    font-size: 1rem;
    line-height: 130%;
  }
`

export const ImageContainer = styled.div<ImageContainerProps>`
  background-color: ${({ variant, theme }) =>
    variant === 'lightYellow' && theme['yellow-100']};
  background-color: ${({ variant, theme }) =>
    variant === 'yellow' && theme['yellow-900']};
  background-color: ${({ variant, theme }) =>
    variant === 'purple' && theme['purple-500']};
  background-color: ${({ variant, theme }) =>
    variant === 'grey' && theme['grey-700']};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
`
