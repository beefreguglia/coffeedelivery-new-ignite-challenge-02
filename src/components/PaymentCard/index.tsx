import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Button from '../Button'
import {
  ButtonsContainer,
  CardTitle,
  PaymentCardContainer,
  Text,
  TitleContainer,
} from './styles'

export default function PaymentCard() {
  const { setValue, getValues } = useFormContext()
  const { card } = getValues()
  const [cardValue, setCardValue] = useState(card)
  const isCreditCard = cardValue === 'CREDIT'
  const isDebitCard = cardValue === 'DEBIT'
  const isMoney = cardValue === 'MONEY'
  function handleCreditCard() {
    setValue('card', 'CREDIT')
    setCardValue('CREDIT')
  }
  function handleDebitCard() {
    setValue('card', 'DEBIT')
    setCardValue('DEBIT')
  }
  function handleMoney() {
    setValue('card', 'MONEY')
    setCardValue('MONEY')
  }

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
        <Button
          variant="grey"
          isSelected={isCreditCard}
          onClick={handleCreditCard}
          type="button"
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </Button>
        <Button
          variant="grey"
          isSelected={isDebitCard}
          onClick={handleDebitCard}
          type="button"
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </Button>
        <Button
          variant="grey"
          isSelected={isMoney}
          onClick={handleMoney}
          type="button"
        >
          <Money size={16} />
          DINHEIRO
        </Button>
      </ButtonsContainer>
    </PaymentCardContainer>
  )
}
