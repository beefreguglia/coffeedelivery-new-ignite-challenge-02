import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import Button from '../Button'
import {
  ButtonsContainer,
  CardTitle,
  PaymentCardContainer,
  Text,
  TitleContainer,
} from './styles'

export default function PaymentCard() {
  return (
    <PaymentCardContainer>
      <TitleContainer>
        <CurrencyDollar size={22} />
        <CardTitle>Pagamento</CardTitle>
      </TitleContainer>
      <Text>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </Text>
      <ButtonsContainer>
        <Button variant="grey" isSelected>
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </Button>
        <Button variant="grey">
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </Button>
        <Button variant="grey">
          <Money size={16} />
          DINHEIRO
        </Button>
      </ButtonsContainer>
    </PaymentCardContainer>
  )
}
