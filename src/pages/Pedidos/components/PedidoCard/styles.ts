import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 16px;
  width: 100%;
  height: 100%;
`

export const PedidoDate = styled.p`
  text-align: end;
`

export const CardRow = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const CardColumn = styled.div`
  display: grid;
  justify-content: stretch;
  grid-template-areas: content;
  grid-template-columns: 3.75rem;
  width: 100%;
`

export const CardColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`

export const CardColumnTitle = styled.p`
  font-weight: 700;
  font-size: 0.875rem;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-title']};
  white-space: pre;
`

export const CardColumnValue = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
  white-space: pre;
`

export const ShowDetails = styled.a`
  user-select: none;
  display: grid;
  grid-template-areas: content;
  width: 90%;
  text-align: end;
  white-space: pre;
  color: ${(props) => props.theme['purple-dark']};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.purple};
  }
`

interface PedidoProductListProps {
  show: boolean
}

export const PedidoProductList = styled.section<PedidoProductListProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
`

export const PedidoProductCard = styled.div``
