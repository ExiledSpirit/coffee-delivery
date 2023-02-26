import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { FillAddressFormData, PaymentMethodTypes } from '../pages/Checkout'
import { CartProduct } from '../reducers/cart/reducer'
import { pedidoReducer } from '../reducers/pedido/reducer'
import { addPedidoAction } from '../reducers/pedido/actions'

export interface Pedido {
  id: string
  products: CartProduct[]
  custo: number
  paymentMethod: PaymentMethodTypes
  address: FillAddressFormData
  dataPedido: Date
}

interface PedidoContextType {
  pedidos: Pedido[]
  ultimoPedido: Pedido
  addPedido: (
    products: CartProduct[],
    paymentMethod: PaymentMethodTypes,
    address: FillAddressFormData,
  ) => void
}

const PedidoContext = createContext<PedidoContextType>({} as PedidoContextType)

export function PedidoContextProvider({ children }: { children: ReactNode }) {
  const [pedidoState, dispatch] = useReducer(
    pedidoReducer,
    {
      pedidos: [],
      ultimoPedido: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:pedido-state-1.0.0',
      )

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
      return {
        pedidos: [],
        ultimoPedido: null,
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(pedidoState)

    localStorage.setItem('@coffee-delivery:pedido-state-1.0.0', stateJSON)
  }, [pedidoState])

  const { pedidos, ultimoPedido } = pedidoState

  function addPedido(
    products: CartProduct[],
    paymentMethod: PaymentMethodTypes,
    address: FillAddressFormData,
  ) {
    dispatch(addPedidoAction(products, paymentMethod, address))
  }

  return (
    <PedidoContext.Provider
      value={{
        pedidos,
        ultimoPedido,
        addPedido,
      }}
    >
      {children}
    </PedidoContext.Provider>
  )
}

export const usePedido = () => useContext(PedidoContext)
