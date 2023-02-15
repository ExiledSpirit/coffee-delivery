import { useCart } from '../../contexts/cart-context'
import { CafeSelecionadoCard } from './components/CafeSelecionado'
import {
  CafezesSelecionadosCard,
  CafezesSelecionadosContainer,
  CheckoutContainer,
  CompletePedidoCard,
  CompletePedidoContainer,
  Separator,
} from './styles'

export function Checkout() {
  const { products, totalCost } = useCart()

  return (
    <CheckoutContainer>
      <CompletePedidoContainer>
        <p>Complete seu pedido</p>
        <CompletePedidoCard></CompletePedidoCard>
        <CompletePedidoCard></CompletePedidoCard>
      </CompletePedidoContainer>
      <CafezesSelecionadosContainer>
        <p>Cafés selecionados</p>
        <CafezesSelecionadosCard>
          {products.map((product) => {
            return (
              <>
                <CafeSelecionadoCard
                  key={product.coffee.id}
                  coffee={product.coffee}
                />
                <Separator />
              </>
            )
          })}
          R${totalCost.toFixed(2)}
        </CafezesSelecionadosCard>
      </CafezesSelecionadosContainer>
    </CheckoutContainer>
  )
}
