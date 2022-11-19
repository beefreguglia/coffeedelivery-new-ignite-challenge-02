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
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

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
  id: string
}

interface ImageSelectorProps {
  image: Images
}

function ImageSelector({ image }: ImageSelectorProps) {
  switch (image) {
    case 'Americano':
      return <StyledImage src={Americano} alt="" />
    case 'Capuccino':
      return <StyledImage src={Capuccino} alt="" />
    case 'Arabe':
      return <StyledImage src={Arabe} alt="" />
    case 'CafeComLeite':
      return <StyledImage src={CafeComLeite} alt="" />
    case 'CafeGelado':
      return <StyledImage src={CafeGelado} alt="" />
    case 'ChocolateQuente':
      return <StyledImage src={ChocolateQuente} alt="" />
    case 'Cubano':
      return <StyledImage src={Cubano} alt="" />
    case 'Expresso':
      return <StyledImage src={Expresso} alt="" />
    case 'ExpressoCremoso':
      return <StyledImage src={ExpressoCremoso} alt="" />
    case 'Havaiano':
      return <StyledImage src={Havaiano} alt="" />
    case 'Irlandes':
      return <StyledImage src={Irlandes} alt="" />
    case 'Latte':
      return <StyledImage src={Latte} alt="" />
    case 'Macchiato':
      return <StyledImage src={Macchiato} alt="" />
    case 'Mochaccino':
      return <StyledImage src={Mochaccino} alt="" />
    default:
      return <StyledImage src={Expresso} alt="" />
  }
}

export default function CoffeeCheckoutCard({
  image,
  name,
  price,
  id,
}: CoffeeCheckoutCardProps) {
  const { deleteOrder } = useContext(OrderContext)

  function handleDeleteOrder() {
    deleteOrder(id)
  }

  return (
    <CoffeeCheckoutCardContainer>
      <CoffeeInformationContainer>
        <ImageSelector image={image} />
        <InformationContainer>
          <Text>{name}</Text>
          <ButtonsContainer>
            <NumberInput id={image} />
            <Button variant="grey" onClick={handleDeleteOrder}>
              <Trash size={16} />
              REMOVER
            </Button>
          </ButtonsContainer>
        </InformationContainer>
      </CoffeeInformationContainer>
      <Price>R${price}</Price>
    </CoffeeCheckoutCardContainer>
  )
}
