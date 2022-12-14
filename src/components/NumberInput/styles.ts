import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DecrementButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['grey-400']};
  border: none;
  height: 100%;
  width: 100%;
  padding: 0.4rem;
  cursor: pointer;
  color: ${({ theme }) => theme['purple-500']};
  transition: all 400ms;
  border-radius: 6px 0 0 6px;

  &:hover {
    color: ${({ theme }) => theme['purple-900']};
  }
  &:disabled {
    color: ${({ theme }) => theme['grey-600']};
    cursor: not-allowed;
  }
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme['grey-400']};
  transition: 400ms;
  width: 100%;
  min-width: 1.25rem;
  height: 100%;
  padding: 0.4rem 0.5rem;
  border: none;
  text-align: center;
  padding: 0.3rem 0;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const IncrementButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['grey-400']};
  border: none;
  height: 100%;
  width: 100%;
  padding: 0.4rem;
  cursor: pointer;
  color: ${({ theme }) => theme['purple-500']};
  transition: 400ms;
  border-radius: 0 6px 6px 0;

  &:hover {
    color: ${({ theme }) => theme['purple-900']};
  }
  &:disabled {
    color: ${({ theme }) => theme['grey-600']};
    cursor: not-allowed;
  }
`
