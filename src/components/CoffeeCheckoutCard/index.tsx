import {
  ButtonsContainer,
  CoffeeCheckoutCardContainer,
  CoffeeInformationContainer,
  InformationContainer,
  Price,
  StyledImage,
  Text,
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
import { Trash } from 'phosphor-react'

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

interface CoffeeCheckoutCardProps {
  image: Images
  name: string
  price: number
}

export default function CoffeeCheckoutCard({
  image,
  name,
  price,
}: CoffeeCheckoutCardProps) {
  return (
    <CoffeeCheckoutCardContainer>
      <CoffeeInformationContainer>
        {image === 'Capuccino' && <StyledImage src={Capuccino} alt="" />}
        {image === 'Arabe' && <StyledImage src={Arabe} alt="" />}
        {image === 'CafeComLeite' && <StyledImage src={CafeComLeite} alt="" />}
        {image === 'CafeGelado' && <StyledImage src={CafeGelado} alt="" />}
        {image === 'ChocolateQuente' && (
          <StyledImage src={ChocolateQuente} alt="" />
        )}
        {image === 'Cubano' && <StyledImage src={Cubano} alt="" />}
        {image === 'Expresso' && <StyledImage src={Expresso} alt="" />}
        {image === 'ExpressoCremoso' && (
          <StyledImage src={ExpressoCremoso} alt="" />
        )}
        {image === 'Havaiano' && <StyledImage src={Havaiano} alt="" />}
        {image === 'Irlandes' && <StyledImage src={Irlandes} alt="" />}
        {image === 'Latte' && <StyledImage src={Latte} alt="" />}
        {image === 'Macchiato' && <StyledImage src={Macchiato} alt="" />}
        {image === 'Americano' && <StyledImage src={Americano} alt="" />}
        {image === 'Mochaccino' && <StyledImage src={Mochaccino} alt="" />}
        <InformationContainer>
          <Text>{name}</Text>
          <ButtonsContainer>
            <NumberInput />
            <Button variant="grey">
              <Trash size={16} />
              REMOVER
            </Button>
          </ButtonsContainer>
        </InformationContainer>
      </CoffeeInformationContainer>
      <Price>R$ {price}</Price>
    </CoffeeCheckoutCardContainer>
  )
}
