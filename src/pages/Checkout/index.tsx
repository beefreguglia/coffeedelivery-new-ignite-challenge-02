import AddressCard from '../../components/AddressCard'
import ConfirmationCard from '../../components/ConfirmationCard'
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
        <ConfirmationCard />
      </RightContainer>
    </CheckoutContainer>
  )
}
