import SuccessBanner from '../../components/SuccessBanner'
import SuccessImage from '../../assets/SuccessImage.png'
import {
  LeftContainer,
  RightContainer,
  SuccessContainer,
  SuccessSubtitle,
  SuccesTitle,
} from './styles'

export default function Success() {
  return (
    <SuccessContainer>
      <LeftContainer>
        <SuccesTitle>Uhu! Pedido confirmado</SuccesTitle>
        <SuccessSubtitle>
          Agora é só aguardar que o café chegará até você
        </SuccessSubtitle>
        <SuccessBanner />
      </LeftContainer>
      <RightContainer>
        <img
          src={SuccessImage}
          alt="Foto de homem saindo para entregar o café com uma moto"
        />
      </RightContainer>
    </SuccessContainer>
  )
}
