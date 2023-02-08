import styled from 'styled-components'

export const CoffeeSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
