import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  padding: 0 10rem;
  margin-top: 12rem;
  gap: 6.375rem;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const RightContainer = styled.div`
  display: flex;
  margin-top: 6rem;

  img {
    max-width: 492px;
    max-height: 293px;
  }
`

export const SuccesTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${({ theme }) => theme['yellow-900']};
  margin-bottom: 0.25rem;
`

export const SuccessSubtitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${({ theme }) => theme['grey-800']};
  margin-bottom: 2.5rem;
`
