import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const BaseCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const CafezesSelecionadosCard = styled(BaseCard)`
  border-radius: 6px 44px;
`

export const CompletePedidoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CompletePedidoCard = styled(BaseCard)`
  border-radius: 6px;
`
