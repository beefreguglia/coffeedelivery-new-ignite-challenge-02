import { Container } from './styles'
import Logo from '../../assets/Logo.png'
import Button from '../Button'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { toast } from 'react-toastify'

export default function Header() {
  const navigate = useNavigate()
  const { allItemsQuantity } = useContext(OrderContext)
  const cartHaveItems = allItemsQuantity > 0
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
          onClick={
            cartHaveItems
              ? () => navigate('/checkout')
              : () =>
                  toast.error('Adicione algum produto para ir para o carrinho!')
          }
        >
          <ShoppingCart size={22} weight="fill" />
        </Button>
      </div>
    </Container>
  )
}
