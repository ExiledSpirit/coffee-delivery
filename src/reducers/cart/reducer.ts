import { CoffeeProduct } from '../../shared/coffee-list'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface CartProduct {
  coffee: CoffeeProduct
  quantity: number
}

interface CartState {
  products: CartProduct[]
}

export function cartReducer(state: CartState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        if (
          draft.products.findIndex(
            (product) => product.coffee.id === payload.newProduct.id,
          )
        )
          draft.products.push({
            coffee: payload.newProduct,
            quantity: payload.quantity,
          })
      })
    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const productToUpdateIndex = state.products.findIndex((product) => {
        return product.coffee.id === payload.id
      })

      if (productToUpdateIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.products[productToUpdateIndex].quantity = payload.quantity
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        draft.products = draft.products.filter(
          (product) => product.coffee.id !== payload.id,
        )
      })
    }
    default:
      return state
  }
}
