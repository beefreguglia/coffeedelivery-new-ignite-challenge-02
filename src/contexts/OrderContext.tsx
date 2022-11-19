import { createContext, ReactNode, useState } from 'react'
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

  function createNewOrder(data: createOrderData) {
    const id = String(new Date().getTime())
    const newOrder: Order = {
      id,
      name: data.name,
      price: data.price,
      quantity: data.coffeeQuantity,
      image: data.image,
    }
    setOrders((state) => [...state, newOrder])
  }

  function deleteOrder(id: string) {
    const filteredOrders = orders.filter((order) => order.id !== id)
    setOrders(filteredOrders)
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        createNewOrder,
        allItemsQuantity,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
