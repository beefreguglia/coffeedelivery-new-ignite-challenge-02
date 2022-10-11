import { Container } from './styles'
import Logo from '../../assets/Logo.png'
import Button from '../Button'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <Container>
      <img src={Logo} alt="Logotipo Coffee Delivery"></img>
      <div>
        <Button variant="lightPurple">
          <MapPin size={22} weight="fill" />
          Ouro preto - MG
        </Button>
        <Button
          variant="lightYellow"
          isCart
          cartQuantity={10}
          onClick={() => navigate('/checkout')}
        >
          <ShoppingCart size={22} weight="fill" />
        </Button>
      </div>
    </Container>
  )
}
