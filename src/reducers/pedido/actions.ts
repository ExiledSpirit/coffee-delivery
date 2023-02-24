/* eslint-disable no-unused-vars */
import { Pedido } from '../../contexts/pedido-context'
import { FillAddressFormData, PaymentMethodTypes } from '../../pages/Checkout'
import { CoffeeProduct } from '../../shared/coffee-list'
import { CartProduct } from '../cart/reducer'

export enum ActionTypes {
  ADD_PEDIDO = 'ADD_PEDIDO',
}

export interface AddPedidoActionPayload {
  products: CartProduct[]
  paymentMethod: PaymentMethodTypes
  address: FillAddressFormData
}

export function addPedidoAction(
  products: CartProduct[],
  paymentMethod: PaymentMethodTypes,
  address: FillAddressFormData,
) {
  const payload: AddPedidoActionPayload = {
    products,
    paymentMethod,
    address,
  }

  return {
    type: ActionTypes.ADD_PEDIDO,
    payload,
  }
}
