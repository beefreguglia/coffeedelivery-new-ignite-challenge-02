import {
  BackgroundContainer,
  BannerContainer,
  ImageContainer,
  TextContainer,
} from './styles'
import CoffeeImage from '../../assets/Imagem.png'
import Pins from './Pins'

export default function Banner() {
  return (
    <BackgroundContainer>
      <BannerContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee delivery vocế recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Pins />
        </TextContainer>
        <ImageContainer>
          <img src={CoffeeImage} alt="Café" />
        </ImageContainer>
      </BannerContainer>
    </BackgroundContainer>
  )
}
