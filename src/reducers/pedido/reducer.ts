import { useCart } from '../../contexts/cart-context'
import { Pedido } from '../../contexts/pedido-context'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface PedidoState {
  pedidos: Pedido[]
  ultimoPedido: Pedido
}

export function pedidoReducer(state: PedidoState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD_PEDIDO:
      return produce(state, (draft) => {
        const { products, clearProducts } = useCart()

        const novoPedido: Pedido = {
          products,
          dataPedido: new Date(),
          paymentMethod: payload.paymentMethod,
          address: payload.address,
        }

        draft.pedidos.push(novoPedido)
        draft.ultimoPedido = novoPedido

        clearProducts()
      })
    default:
      return state
  }
}
