import {
  CafezesSelecionadosCard,
  CheckoutContainer,
  CompletePedidoCard,
  CompletePedidoContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompletePedidoContainer>
        <CompletePedidoCard></CompletePedidoCard>
        <CompletePedidoCard></CompletePedidoCard>
      </CompletePedidoContainer>
      <CafezesSelecionadosCard></CafezesSelecionadosCard>
    </CheckoutContainer>
  )
}
