import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
type Images =
  | 'Capuccino'
  | 'Arabe'
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
  | 'Americano'
  | 'Mochaccino'

interface createOrderData {
  coffeeQuantity: number
  name: string
  price: number
  image: Images
}

interface Order {
  id: string
  name: string
  price: number
  quantity: number
  image: Images
}

interface Address {
  CEP: string
  street: string
  neighborhood: string
  city: string
  uf: string
  number: number
  complement: string
}

interface OrderContextType {
  orders: Order[]
  address: Address
  cardType: string
  allItemsQuantity: number
  allItemsValue: number
  createNewOrder: (data: createOrderData) => void
  deleteOrder: (id: string) => void
  completeAddress: (newAddress: Address) => void
  setCardType: (cardType: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])
  const [address, setAddress] = useState<Address>({} as Address)
  const [card, setCard] = useState('')

  const allItemsQuantity: number = orders.reduce(
    (prevVal, currentOrder) => prevVal + currentOrder.quantity,
    0,
  )

  const allItemsValue: number = orders.reduce(
    (prevVal, currentOrder) =>
      prevVal + currentOrder.price * currentOrder.quantity,
    0,
  )

  function createNewOrder(data: createOrderData) {
    const id = String(new Date().getTime())
    let orderAux: Order = {
      id,
      name: data.name,
      price: data.price,
      quantity: data.coffeeQuantity,
      image: data.image,
    }
    const findedOrder = orders.find((order) => order.name === data.name)

    if (findedOrder) {
      orderAux = {
        ...findedOrder,
        quantity: findedOrder.quantity + data.coffeeQuantity,
      }
      const newOrder = orders.map((order) => {
        if (order.name === orderAux.name) {
          return { ...orderAux }
        }
        return order
      })
      setOrders(newOrder)
    } else {
      setOrders((state) => [...state, orderAux])
    }
  }

  function deleteOrder(id: string) {
    const filteredOrders = orders.filter((order) => order.id !== id)
    if (filteredOrders.length !== orders.length) {
      toast.success('O pedido foi removido com sucesso!')
      setOrders(filteredOrders)
    } else {
      toast.error('O pedido não foi encontrado!')
    }
  }

  function completeAddress(newAddress: Address) {
    setAddress(newAddress)
  }

  function setCardType(cardType: string) {
    setCard(cardType)
  }
  return (
    <OrderContext.Provider
      value={{
        orders,
        address,
        allItemsQuantity,
        allItemsValue,
        createNewOrder,
        deleteOrder,
        completeAddress,
        cardType: card,
        setCardType,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
