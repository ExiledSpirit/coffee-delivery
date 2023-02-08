/* eslint-disable no-unused-vars */
import { CoffeeProduct } from '../../shared/coffee-list'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_COFFEE',
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_PRODUCTS = 'CLEAR_PRODUCTS',
}

export function addProductAction(newProduct: CoffeeProduct, quantity: number) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      newProduct,
      quantity,
    },
  }
}

export function updateProductQuantityAction(id: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}

export function removeProductAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }
}

export function clearProductsAction() {
  return {
    type: ActionTypes.CLEAR_PRODUCTS,
  }
}
