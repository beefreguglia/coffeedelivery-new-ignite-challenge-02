import Button from '../Button'
import CoffeeCheckoutCard from '../CoffeeCheckoutCard'
import {
  ConfirmationCardContainer,
  ConfirmationFormCard,
  MainTitle,
  Text,
  Total,
  TotalValuesContainer,
  Value,
  ValuesContainer,
} from './styles'

export default function ConfirmationCard() {
  return (
    <ConfirmationCardContainer>
      <MainTitle>Cafés selecionados</MainTitle>
      <ConfirmationFormCard>
        <CoffeeCheckoutCard image="Americano" name="Americano" price={9.9} />
        <CoffeeCheckoutCard image="Arabe" name="Arabe" price={10.0} />
        <TotalValuesContainer>
          <ValuesContainer>
            <Text>Total de Itens</Text>
            <Value>R$ 29,70</Value>
          </ValuesContainer>
          <ValuesContainer>
            <Text>Entrega</Text>
            <Value>R$ 3,50</Value>
          </ValuesContainer>
          <ValuesContainer>
            <Total>Entrega</Total>
            <Total>R$ 33,20</Total>
          </ValuesContainer>
          <Button variant="yellow" isLargeButton>
            Confirmar Pedido
          </Button>
        </TotalValuesContainer>
      </ConfirmationFormCard>
    </ConfirmationCardContainer>
  )
}
