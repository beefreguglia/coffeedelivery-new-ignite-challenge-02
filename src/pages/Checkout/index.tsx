import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import AddressCard from '../../components/AddressCard'
import ConfirmationCard from '../../components/ConfirmationCard'
import PaymentCard from '../../components/PaymentCard'
import { CheckoutContainer, LeftContainer, RightContainer } from './styles'
import { OrderContext } from '../../contexts/OrderContext'
import { useContext, useEffect } from 'react'

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
  CEP: zod.string(),
  street: zod.string(),
  number: zod.number(),
  complement: zod.string(),
  neighbourhood: zod.string(),
  city: zod.string(),
  UF: zod.string(),
})

export type ConfirmationOrderFormData = zod.infer<
  typeof confirmationOrderValidationSchema
>

export default function Checkout() {
  const { orders } = useContext(OrderContext)

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
  const { handleSubmit, setValue } = confirmationOrderForm

  function handleConcludeOrder() {}

  useEffect(() => {
    function handleValues() {
      orders.forEach((order) => {
        switch (order.image) {
          case 'Capuccino':
            setValue(order.image, order.quantity)
            break
          case 'Arabe':
            setValue(order.image, order.quantity)
            break
          case 'CafeComLeite':
            setValue(order.image, order.quantity)
            break
          case 'CafeGelado':
            setValue(order.image, order.quantity)
            break
          case 'Cubano':
            setValue(order.image, order.quantity)
            break
          case 'ChocolateQuente':
            setValue(order.image, order.quantity)
            break
          case 'Expresso':
            setValue(order.image, order.quantity)
            break
          case 'ExpressoCremoso':
            setValue(order.image, order.quantity)
            break
          case 'Havaiano':
            setValue(order.image, order.quantity)
            break
          case 'Irlandes':
            setValue(order.image, order.quantity)
            break
          case 'Latte':
            setValue(order.image, order.quantity)
            break
          case 'Macchiato':
            setValue(order.image, order.quantity)
            break
          case 'Americano':
            setValue(order.image, order.quantity)
            break
          case 'Mochaccino':
            setValue(order.image, order.quantity)
            break
          default:
            break
        }
      })
    }
    handleValues()
  }, [orders, setValue])

  return (
    <FormProvider {...confirmationOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConcludeOrder)}>
        <LeftContainer>
          <AddressCard />
          <PaymentCard />
        </LeftContainer>
        <RightContainer>
          <ConfirmationCard />
        </RightContainer>
      </CheckoutContainer>
    </FormProvider>
  )
}
