import styled from 'styled-components'

export const InputContainer = styled.div<{
  isMediumButton: boolean
  isSmallButton: boolean
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  width: ${({ isMediumButton }) => isMediumButton === true && '200px'};
  width: ${({ isSmallButton }) => isSmallButton === true && '60px'};
  position: relative;

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-900']};
  }
`

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: 0.75rem;
  color: ${({ theme }) => theme['grey-700']};
  background-color: ${({ theme }) => theme['grey-300']};
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 130%;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme['grey-600']};
  }

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-900']};
  }
`
export const OptionalText = styled.p`
  position: absolute;
  right: 12px;
  font-size: 0.75rem;
  line-height: 130%;
  font-style: italic;
  color: ${({ theme }) => theme['grey-600']}; ;
`
