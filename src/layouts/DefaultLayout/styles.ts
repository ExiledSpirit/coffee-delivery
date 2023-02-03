import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 2rem 10rem;

  background-color: ${(props) => props.theme.background};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
