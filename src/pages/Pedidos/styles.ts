import styled from 'styled-components'

export const PedidosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const PedidosList = styled.section`
  display: flex;
  gap: 1rem;
  max-width: 62.5rem;
  width: 100%;
`

export const ListaVaziaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ListaVaziaMensagem = styled.p`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-label']};
`
