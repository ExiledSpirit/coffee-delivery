import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  height: 310px;
  width: 256px;
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
`
