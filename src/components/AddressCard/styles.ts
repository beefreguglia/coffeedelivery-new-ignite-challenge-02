import styled from 'styled-components'

export const AddressCardContainer = styled.div`
  min-width: 640px;
`

export const FormCard = styled.form`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['grey-200']};
`
export const MainTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme['grey-800']};
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
    color: ${({ theme }) => theme['yellow-900']};
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme['grey-700']};
  font-size: 0.875rem;
  line-height: 130%;
  margin-left: 1.875rem;
  margin-bottom: 2rem;
`

export const InputDivider = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
`