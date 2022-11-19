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

type Order = {
  id: string
  name: string
  price: number
  quantity: number
  image: Images
}

interface OrderContextType {
  orders: Order[]
  allItemsQuantity: number
  allItemsValue: number
  createNewOrder: (data: createOrderData) => void
  deleteOrder: (id: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])

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

  return (
    <OrderContext.Provider
      value={{
        orders,
        allItemsQuantity,
        allItemsValue,
        createNewOrder,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
