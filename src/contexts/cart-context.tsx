import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { CoffeeProduct } from '../shared/coffee-list'
import { CartProduct, cartReducer } from '../reducers/cart/reducer'
import {
  addProductAction,
  clearProductsAction,
  removeProductAction,
  updateProductQuantityAction,
} from '../reducers/cart/actions'

interface CartContextType {
  products: CartProduct[]
  overallQuantity: number
  totalCost: number
  addProduct: (coffee: CoffeeProduct, quantity: number) => void
  updateProductQuantity: (id: string, quantity: number) => void
  removeProduct: (id: string) => void
  clearProducts: () => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
      return { products: [] }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  const { products } = cartState

  function addProduct(product: CoffeeProduct, quantity: number) {
    dispatch(addProductAction(product, quantity))
  }

  function updateProductQuantity(id: string, quantity: number) {
    dispatch(updateProductQuantityAction(id, quantity))
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id))
  }

  function clearProducts() {
    dispatch(clearProductsAction())
  }

  const overallQuantity = products.reduce(
    (prev, product) => prev + product.quantity,
    0,
  )

  console.log(overallQuantity)

  console.log(products)

  const totalCost = products.reduce(
    (prev, product) => prev + product.quantity * product.coffee.price,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        products,
        overallQuantity,
        totalCost,
        addProduct,
        updateProductQuantity,
        removeProduct,
        clearProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
