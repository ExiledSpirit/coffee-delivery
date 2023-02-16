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
  justify-content: space-between;
  width: 28rem;
`

export const CafezesSelecionadosText = styled.div`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
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
`

export const CompletePedidoCard = styled(BaseCard)`
  border-radius: 6px;
`

export const Separator = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CheckoutCostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const CheckoutBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CheckoutCost = styled(CheckoutBase)`
  p {
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 14px;
  }

  h2 {
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 16px;
  }
`

export const CheckoutCostTotal = styled(CheckoutBase)`
  p {
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 20px;
  }

  h2 {
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 20px;
  }
`

export const FinalizarPedidoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  border: 0;
  width: 100%;
  height: 2.875rem;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
