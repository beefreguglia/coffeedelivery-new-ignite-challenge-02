import { ImageContainer, PinContainer, PinsContainer } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export default function Pins() {
  return (
    <PinsContainer>
      <PinContainer>
        <ImageContainer variant="yellow">
          <ShoppingCart size={16} weight="fill" />
        </ImageContainer>
        <p>Compra simples e segura</p>
      </PinContainer>
      <PinContainer>
        <ImageContainer variant="grey">
          <Package size={16} weight="fill" />
        </ImageContainer>
        <p>Embalagem mantém o café intacto</p>
      </PinContainer>
      <PinContainer>
        <ImageContainer variant="yellow">
          <Timer size={16} weight="fill" />
        </ImageContainer>
        <p>Entrega rápida e rastreada</p>
      </PinContainer>
      <PinContainer>
        <ImageContainer variant="purple">
          <Coffee size={16} weight="fill" />
        </ImageContainer>
        <p>O café chega fresquinho até você</p>
      </PinContainer>
    </PinsContainer>
  )
}
