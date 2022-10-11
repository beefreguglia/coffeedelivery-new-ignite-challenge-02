import styled from 'styled-components'

export const PaymentCardContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['grey-200']};
`

export const CardTitle = styled.h2`
  font-size: 1rem;
  line-height: 130%;
  font-weight: 400;
  color: ${({ theme }) => theme['grey-800']};
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.125rem;
  font-size: 1rem;
  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme['grey-700']};
  font-size: 0.875rem;
  line-height: 130%;
  margin-left: 1.875rem;
  margin-bottom: 2rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  button {
    width: 100%;
    font-size: 0.75rem;
    gap: 0.75rem;
    padding: 1rem;
    justify-content: flex-start;

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }
  }
`
