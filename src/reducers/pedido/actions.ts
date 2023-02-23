/* eslint-disable no-unused-vars */
import { Pedido } from '../../contexts/pedido-context'
import { FillAddressFormData, PaymentMethodTypes } from '../../pages/Checkout'
import { CoffeeProduct } from '../../shared/coffee-list'

export enum ActionTypes {
  ADD_PEDIDO = 'ADD_PEDIDO',
}

export interface AddPedidoActionPayload {
  paymentMethod: PaymentMethodTypes
  address: FillAddressFormData
}

export function addPedidoAction(
  paymentMethod: PaymentMethodTypes,
  address: FillAddressFormData,
) {
  const payload: AddPedidoActionPayload = {
    paymentMethod,
    address,
  }

  return {
    type: ActionTypes.ADD_PEDIDO,
    payload,
  }
}
