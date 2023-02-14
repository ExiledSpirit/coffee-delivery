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
export const CafezesSelecionadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 28rem;

  p {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
  }
`

export const CafezesSelecionadosCard = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
  gap: 2rem;
`

export const CompletePedidoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  p {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
  }
`

export const CompletePedidoCard = styled(BaseCard)`
  border-radius: 6px;
`

export const Separator = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const CheckoutInfo = styled.div`
  displ
`
