import { createContext, ReactNode, useState } from 'react'

interface createOrderData {
  coffeeQuantity: number
  name: string
  price: number
}

type Order = {
  id: string
  name: string
  price: number
  quantity: number
}

interface OrderContextType {
  orders: Order[]
  createNewOrder: (data: createOrderData) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])

  function createNewOrder(data: createOrderData) {
    const id = String(new Date().getTime())
    const newOrder: Order = {
      id,
      name: data.name,
      price: data.price,
      quantity: data.coffeeQuantity,
    }
    setOrders((state) => [...state, newOrder])
  }
  return (
    <OrderContext.Provider
      value={{
        orders,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
