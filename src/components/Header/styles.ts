import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
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
    weight: 400;
    line-height: 1.7;
  }
`

export const CartButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  line-height: 0.7;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  &:hover {
    cursor: pointer;
  }
`
