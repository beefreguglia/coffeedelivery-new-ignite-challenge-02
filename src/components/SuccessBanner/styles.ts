import styled from 'styled-components'

export const SuccessBannerBorder = styled.div`
  border: solid 1px transparent;
  border-radius: 6px 36px;
  background-image: ${({ theme }) =>
    `linear-gradient(white, white), radial-gradient(circle at top left, ${theme['yellow-900']} , ${theme['purple-900']})`};
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const SuccessBannerContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const PinsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`

export const Pin = styled.div`
  display: flex;
  gap: 0.75rem;
`

type ImageContainerVariants = 'purple' | 'yellow' | 'darkYellow'

export const ImageContainer = styled.div<{ variant: ImageContainerVariants }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme, variant }) =>
    variant === 'purple' && theme['purple-500']};
  background-color: ${({ theme, variant }) =>
    variant === 'yellow' && theme['yellow-500']};
  background-color: ${({ theme, variant }) =>
    variant === 'darkYellow' && theme['yellow-900']};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
`

export const Text = styled.div`
  line-height: 130%;
  font-size: 1rem;
  color: ${({ theme }) => theme['grey-700']};

  span {
    font-weight: 800;
  }
`
