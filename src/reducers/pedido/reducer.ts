import { Pedido } from '../../contexts/pedido-context'
import { ActionTypes } from './actions'
import { produce } from 'immer'
import { v4 } from 'uuid'

interface PedidoState {
  pedidos: Pedido[]
  ultimoPedido: Pedido
}

export function pedidoReducer(state: PedidoState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD_PEDIDO:
      console.log(state)
      return produce(state, (draft) => {
        const novoPedido: Pedido = {
          id: v4(),
          products: payload.products,
          dataPedido: new Date(),
          paymentMethod: payload.paymentMethod,
          address: payload.address,
        }

        draft.pedidos.push(novoPedido)
        draft.ultimoPedido = novoPedido
      })
    default:
      return state
  }
}
