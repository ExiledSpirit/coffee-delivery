import styled from 'styled-components'

export interface FixedHeaderProps {
  scroll: boolean
}

export const FixedHeader = styled.div<FixedHeaderProps>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem 0;
  background: ${(props) => props.theme.background};
  opacity: 0.98;
  z-index: 999;
  display: ${(props) => (props.scroll ? 'visible' : 'none')};
  max-height: 100px;
`

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.background};
  padding: 0 10rem;

  nav {
    display: flex;
    gap: 0.5rem;
  }
  animation: 3s infinite alternate slidein;
  @keyframes slidein {
    from {
      margin-bottom: 100%;
    }

    to {
      margin-bottom: 0%;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  line-height: normal;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.7;
  }
`

const BaseButton = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  line-height: 0.7;

  &:hover {
    cursor: pointer;
  }
`

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const PedidosButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: -0.5rem;
  top: -0.5rem;
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;

  p {
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
  }
`
