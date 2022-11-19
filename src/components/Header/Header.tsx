import { Container } from './styles'
import Logo from '../../assets/Logo.png'
import Button from '../Button'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export default function Header() {
  const navigate = useNavigate()
  const { allItemsQuantity } = useContext(OrderContext)
  return (
    <Container>
      <Link to={'/'}>
        <img src={Logo} alt="Logotipo Coffee Delivery"></img>
      </Link>
      <div>
        <Button variant="lightPurple">
          <MapPin size={22} weight="fill" />
          Ouro preto - MG
        </Button>
        <Button
          variant="lightYellow"
          isCart
          cartQuantity={allItemsQuantity}
          onClick={() => navigate('/checkout')}
        >
          <ShoppingCart size={22} weight="fill" />
        </Button>
      </div>
    </Container>
  )
}
