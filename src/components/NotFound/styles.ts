import styled from 'styled-components'

export const NotFoundContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NotFoundText = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme['grey-900']};
`
