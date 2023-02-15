import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem, 0.25rem, 0.5rem, 0.25rem;
`

export const CardControls = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const QuantityButton = styled.button`
  border: 0;
  background: transparent;
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.purple};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const BaseControl = styled.style`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;
`

export const Quantity = styled(BaseControl)`
  color: ${(props) => props.theme['base-title']};
  font-size: 1rem;
`

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.75rem;
  border: none;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['base-subtitle']};
    background: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeeIcon = styled.img`
  height: 4rem;
  width: 4rem;
`

export const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: right;
  font-size: 1rem;
  text-align: right;
`
