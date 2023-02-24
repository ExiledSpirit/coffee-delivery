import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  min-height: 19.375rem;
  min-width: 16rem;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px / 2);
    top: -20px;
  }
`

export const Info = styled.div`
  margin-top: 112px;
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem 1.25rem 1.25rem;
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const Tag = styled.div`
background: ${(props) => props.theme['yellow-light']};
border-radius: 100px;
padding: 0.25rem 0.5rem;
display: flex;
align-items: center;
justify-content: center;

p {
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  font-size 0.75rem;
}
`

export const Title = styled.p`
  margin-top: 1rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1.25rem;
`

export const Price = styled.p`
  font-family: 'Baloo 2' sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  text-align: right;
`

export const Cifrao = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  display: inline;
  text-align: left;
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

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  border-radius: 6px;
  font-size: 0.875rem;
  width: 4.5rem;
  height: 2.375rem;
`

export const CartButton = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  line-height: 0.7;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.purple};
  }
`

interface CartQuantityProps {
  show: boolean
}

export const CartQuantity = styled.div<CartQuantityProps>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
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
