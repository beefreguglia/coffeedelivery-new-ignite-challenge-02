import styled from 'styled-components'

export const ConfirmationCardContainer = styled.div``

export const MainTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme['grey-800']};
`

export const ConfirmationFormCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${({ theme }) => theme['grey-200']};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-height: 80vh;
  overflow: auto;
`
export const TotalValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  button {
    margin-top: 1.5rem;
    text-transform: uppercase;
  }
`
export const ValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme['grey-700']};
`

export const Value = styled.p`
  font-size: 1rem;
  line-height: 130%;
  color: ${({ theme }) => theme['grey-700']};
`

export const Total = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme['grey-700']};
`
