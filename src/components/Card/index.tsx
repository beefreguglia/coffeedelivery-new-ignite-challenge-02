import { ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  Description,
  Pin,
  PinsContainer,
  Price,
  PurchaseContainer,
  QuantityContainer,
  Title,
} from './styles'
import Americano from '../../assets/Americano.png'
import Arabe from '../../assets/Arabe.png'
import CafeComLeite from '../../assets/CafeComLeite.png'
import CafeGelado from '../../assets/CafeGelado.png'
import Capuccino from '../../assets/Capuccino.png'
import ChocolateQuente from '../../assets/ChocolateQuente.png'
import Cubano from '../../assets/Cubano.png'
import Expresso from '../../assets/Expresso.png'
import ExpressoCremoso from '../../assets/ExpressoCremoso.png'
import Havaiano from '../../assets/Havaiano.png'
import Irlandes from '../../assets/Irlandes.png'
import Latte from '../../assets/Latte.png'
import Macchiato from '../../assets/Macchiato.png'
import Mochaccino from '../../assets/Mochaccino.png'
import NumberInput from '../NumberInput'
import Button from '../Button'

type Images =
  | 'Capuccino'
  | 'Arabe'
  | 'CafeComLeite'
  | 'CafeGelado'
  | 'Cubano'
  | 'ChocolateQuente'
  | 'Expresso'
  | 'ExpressoCremoso'
  | 'Havaiano'
  | 'Irlandes'
  | 'Latte'
  | 'Macchiato'
  | 'Americano'
  | 'Mochaccino'

interface CardProps {
  name: string
  description: string
  pins: string[]
  price: number
  image: Images
}

export default function Card({
  image,
  description,
  name,
  pins,
  price,
}: CardProps) {
  return (
    <CardContainer>
      {image === 'Capuccino' && <img src={Capuccino} alt="" />}
      {image === 'Arabe' && <img src={Arabe} alt="" />}
      {image === 'CafeComLeite' && <img src={CafeComLeite} alt="" />}
      {image === 'CafeGelado' && <img src={CafeGelado} alt="" />}
      {image === 'ChocolateQuente' && <img src={ChocolateQuente} alt="" />}
      {image === 'Cubano' && <img src={Cubano} alt="" />}
      {image === 'Expresso' && <img src={Expresso} alt="" />}
      {image === 'ExpressoCremoso' && <img src={ExpressoCremoso} alt="" />}
      {image === 'Havaiano' && <img src={Havaiano} alt="" />}
      {image === 'Irlandes' && <img src={Irlandes} alt="" />}
      {image === 'Latte' && <img src={Latte} alt="" />}
      {image === 'Macchiato' && <img src={Macchiato} alt="" />}
      {image === 'Americano' && <img src={Americano} alt="" />}
      {image === 'Mochaccino' && <img src={Mochaccino} alt="" />}
      <PinsContainer>
        {pins.map((pin) => (
          <Pin key={pin}>{pin}</Pin>
        ))}
      </PinsContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <PurchaseContainer>
        <Price>
          <span>R$</span>
          {price}
        </Price>
        <QuantityContainer>
          <NumberInput />
          <Button variant="purple">
            <ShoppingCart weight="fill" />
          </Button>
        </QuantityContainer>
      </PurchaseContainer>
    </CardContainer>
  )
}
