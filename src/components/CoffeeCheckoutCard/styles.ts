import styled from 'styled-components'

export const CoffeeCheckoutCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -0.5rem;
  padding: 0.5rem 2rem 0.5rem 0.25rem;
`

export const CoffeeInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const StyledImage = styled.img`
  width: 64px;
  height: 64px;
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Text = styled.p`
  font-size: 1rem;
  line-height: 130%;
  color: ${({ theme }) => theme['grey-800']};
  margin-bottom: 0.5rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`

export const Price = styled.h2`
  font-size: 1rem;
  line-height: 130%;
  font-weight: 700;
  color: ${({ theme }) => theme['grey-700']};
`
