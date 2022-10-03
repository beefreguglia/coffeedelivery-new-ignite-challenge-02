import styled from 'styled-components'
import Background from '../../assets/Background.png'

export const BackgroundContainer = styled.div`
  width: 100%;
  background-image: url(${Background});
  background-size: 100%;
  img {
    max-width: 476px;
    max-height: 360px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${({ theme }) => theme['grey-900']};
  }
  h2 {
    margin-top: 1rem;
    font-weight: regular;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme['grey-800']};
  }
`
export const ImageContainer = styled.div`
  img {
    margin-top: 1rem;
    width: 476px;
    height: 360px;
  }
`
export const BannerContainer = styled.div`
  padding: 5.875rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
