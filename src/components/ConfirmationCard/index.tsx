import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import Button from '../Button'
import CoffeeCheckoutCard from '../CoffeeCheckoutCard'
import { NotFound } from '../NotFound'
import {
  CardsContainer,
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
  const { orders, allItemsValue } = useContext(OrderContext)
  const deliveryValue = 3.5
  const haveOrders = orders.length > 0
  const allValue = deliveryValue + allItemsValue
  const formattedDeliveryValue = deliveryValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  const formattedOrderValue = allItemsValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  const formattedAllValue = allValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <ConfirmationCardContainer>
      <MainTitle>Cafés selecionados</MainTitle>
      <ConfirmationFormCard>
        <CardsContainer>
          {haveOrders ? (
            orders.map((order) => (
              <CoffeeCheckoutCard
                image={order.image}
                name={order.name}
                price={order.price}
                key={order.id}
                id={order.id}
              />
            ))
          ) : (
            <NotFound />
          )}
        </CardsContainer>
        <TotalValuesContainer>
          <ValuesContainer>
            <Text>Total de Itens</Text>
            <Value>{formattedOrderValue}</Value>
          </ValuesContainer>
          <ValuesContainer>
            <Text>Entrega</Text>
            <Value>{formattedDeliveryValue}</Value>
          </ValuesContainer>
          <ValuesContainer>
            <Total>Total</Total>
            <Total>{formattedAllValue}</Total>
          </ValuesContainer>
          <Button
            variant="yellow"
            type="submit"
            isLargeButton
            disabled={!haveOrders}
          >
            Confirmar Pedido
          </Button>
        </TotalValuesContainer>
      </ConfirmationFormCard>
    </ConfirmationCardContainer>
  )
}
