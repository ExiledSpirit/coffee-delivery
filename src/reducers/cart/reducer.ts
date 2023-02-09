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
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        draft.products.push(action.payload.product)
      })
    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const productToUpdateIndex = state.products.findIndex((product) => {
        return product.coffee.id === action.payload.id
      })

      if (productToUpdateIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.products[productToUpdateIndex].quantity = action.payload.quantity
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        draft.products.filter(
          (product) => product.coffee.id !== action.payload.id,
        )
      })
    }
    default:
      return state
  }
}
