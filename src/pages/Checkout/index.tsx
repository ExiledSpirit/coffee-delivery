import {
  CafezesSelecionadosCard,
  CafezesSelecionadosContainer,
  CheckoutContainer,
  CompletePedidoCard,
  CompletePedidoContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompletePedidoContainer>
        <p>Complete seu pedido</p>
        <CompletePedidoCard></CompletePedidoCard>
        <CompletePedidoCard></CompletePedidoCard>
      </CompletePedidoContainer>
      <CafezesSelecionadosContainer>
        <p>Cafés selecionados</p>
        <CafezesSelecionadosCard></CafezesSelecionadosCard>
      </CafezesSelecionadosContainer>
    </CheckoutContainer>
  )
}
