import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
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

const confirmationOrderValidationSchema = zod.object({
  Americano: zod.number(),
  Arabe: zod.number(),
  Capuccino: zod.number(),
  CafeComLeite: zod.number(),
  CafeGelado: zod.number(),
  Cubano: zod.number(),
  ChocolateQuente: zod.number(),
  Expresso: zod.number(),
  ExpressoCremoso: zod.number(),
  Havaiano: zod.number(),
  Irlandes: zod.number(),
  Latte: zod.number(),
  Macchiato: zod.number(),
  Mochaccino: zod.number(),
})

export type ConfirmationOrderFormData = zod.infer<
  typeof confirmationOrderValidationSchema
>

type FieldIds =
  | 'Americano'
  | 'Arabe'
  | 'Capuccino'
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
  | 'Mochaccino'

export default function ConfirmationCard() {
  const deliveryValue = 3.5
  const { orders, allItemsValue } = useContext(OrderContext)
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

  const confirmationOrderForm = useForm<ConfirmationOrderFormData>({
    resolver: zodResolver(confirmationOrderValidationSchema),
    defaultValues: {
      Capuccino: 0,
      Arabe: 0,
      CafeComLeite: 0,
      CafeGelado: 0,
      Cubano: 0,
      ChocolateQuente: 0,
      Expresso: 0,
      ExpressoCremoso: 0,
      Havaiano: 0,
      Irlandes: 0,
      Latte: 0,
      Macchiato: 0,
      Americano: 0,
      Mochaccino: 0,
    },
  })

  const { setValue } = confirmationOrderForm

  useEffect(() => {
    function handleCoffeeQuantity(fieldId: FieldIds, quantity: number) {
      setValue(fieldId, quantity)
    }
    if (orders.length > 0) {
      orders.forEach((order) => {
        handleCoffeeQuantity(order.image, order.quantity)
      })
    }
  }, [orders, setValue])

  return (
    <ConfirmationCardContainer>
      <MainTitle>Cafés selecionados</MainTitle>
      <ConfirmationFormCard>
        <FormProvider {...confirmationOrderForm}>
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
        </FormProvider>
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
