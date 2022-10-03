import styled from 'styled-components'

export const HomeContainer = styled.main``

export const CoffeesContainer = styled.div`
  padding: 0 10rem;
  h1 {
    margin-bottom: 3.375rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
