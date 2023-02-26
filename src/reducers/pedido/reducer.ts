import { Pedido } from '../../contexts/pedido-context'
import { ActionTypes } from './actions'
import { produce } from 'immer'
import { v4 } from 'uuid'
import { CartProduct } from '../cart/reducer'

interface PedidoState {
  pedidos: Pedido[]
  ultimoPedido: Pedido
}

export function pedidoReducer(state: PedidoState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD_PEDIDO:
      return produce(state, (draft) => {
        const products: CartProduct[] = payload.products

        const custo = products.reduce(
          (prev, product) => prev + product.quantity * product.coffee.price,
          0,
        )
        const novoPedido: Pedido = {
          id: v4(),
          products,
          dataPedido: new Date(),
          paymentMethod: payload.paymentMethod,
          custo,
          address: payload.address,
        }

        draft.pedidos.push(novoPedido)
        draft.ultimoPedido = novoPedido
      })
    default:
      return state
  }
}
