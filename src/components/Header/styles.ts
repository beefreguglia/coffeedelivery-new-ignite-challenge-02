import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  position: fixed;
  background-color: ${({ theme }) => theme.white};
  z-index: 100;

  div {
    display: flex;
    gap: 0.75rem;
  }
`
