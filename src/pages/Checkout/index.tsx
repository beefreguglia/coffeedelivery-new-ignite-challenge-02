import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import AddressCard from '../../components/AddressCard'
import ConfirmationCard from '../../components/ConfirmationCard'
import PaymentCard from '../../components/PaymentCard'
import { CheckoutContainer, LeftContainer, RightContainer } from './styles'
import { OrderContext } from '../../contexts/OrderContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const confirmationOrderValidationSchema = zod.object({
  Americano: zod.number().optional(),
  Arabe: zod.number().optional(),
  Capuccino: zod.number().optional(),
  CafeComLeite: zod.number().optional(),
  CafeGelado: zod.number().optional(),
  Cubano: zod.number().optional(),
  ChocolateQuente: zod.number().optional(),
  Expresso: zod.number().optional(),
  ExpressoCremoso: zod.number().optional(),
  Havaiano: zod.number().optional(),
  Irlandes: zod.number().optional(),
  Latte: zod.number().optional(),
  Macchiato: zod.number().optional(),
  Mochaccino: zod.number().optional(),
  CEP: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a tarefa'),
  number: zod.number().min(1, 'Informe o número'),
  complement: zod.string().min(1, 'Informe a tarefa'),
  neighborhood: zod.string().min(1, 'Informe a tarefa'),
  city: zod.string().min(1, 'Informe a tarefa'),
  UF: zod.string().min(1, 'Informe a tarefa'),
  card: zod.string().min(1, 'Informe a tarefa'),
})

export type ConfirmationOrderFormData = zod.infer<
  typeof confirmationOrderValidationSchema
>

export default function Checkout() {
  const { orders, completeAddress, setCardType } = useContext(OrderContext)
  const navigate = useNavigate()
  const confirmationOrderForm = useForm<ConfirmationOrderFormData>({
    resolver: zodResolver(confirmationOrderValidationSchema),
    defaultValues: {
      Americano: 0,
      Arabe: 0,
      Capuccino: 0,
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
      Mochaccino: 0,
      CEP: '',
      street: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      UF: '',
      card: 'CREDIT',
    },
  })
  const { handleSubmit, setValue } = confirmationOrderForm

  function handleConcludeOrder(data: ConfirmationOrderFormData) {
    console.log('entrou')
    completeAddress({
      CEP: data.CEP,
      city: data.city,
      complement: data.complement,
      neighborhood: data.neighborhood,
      number: data.number,
      street: data.street,
      uf: data.UF,
    })
    setCardType(data.card)
    navigate('/success')
  }

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
    <CheckoutContainer onSubmit={handleSubmit(handleConcludeOrder)}>
      <FormProvider {...confirmationOrderForm}>
        <LeftContainer>
          <AddressCard />
          <PaymentCard />
        </LeftContainer>
        <RightContainer>
          <ConfirmationCard />
        </RightContainer>
      </FormProvider>
    </CheckoutContainer>
  )
}
