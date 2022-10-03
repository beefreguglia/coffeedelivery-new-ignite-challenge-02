import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 19.375rem;
  width: 16rem;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme['grey-200']};
  border-radius: 6px 36px;
  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 0.75rem;
  }
`
export const PinsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`
export const Pin = styled.div`
  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-900']};
  padding: 0.25rem 0.5rem;
  text-align: center;
  border-radius: 100px;
  font-weight: bold;
  font-size: 0.625rem;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
  text-align: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme['grey-800']};
`

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme['grey-600']};
`

export const PurchaseContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  justify-content: center;
  align-items: center;
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
  color: ${({ theme }) => theme['grey-700']};
  span {
    margin-right: 0.25rem;
    font-size: 0.75rem;
    line-height: 160%;
  }
`
