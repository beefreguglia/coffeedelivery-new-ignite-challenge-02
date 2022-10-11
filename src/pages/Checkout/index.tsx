import AddressCard from '../../components/AddressCard'
import PaymentCard from '../../components/PaymentCard'
import { CheckoutContainer, LeftContainer, RightContainer } from './styles'

export default function Checkout() {
  return (
    <CheckoutContainer>
      <LeftContainer>
        <AddressCard />
        <PaymentCard />
      </LeftContainer>
      <RightContainer>
        <p>right</p>
      </RightContainer>
    </CheckoutContainer>
  )
}
