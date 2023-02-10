import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin-top: 2rem;

  background-color: ${(props) => props.theme.background};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const OutletContainer = styled.div`
  margin: 0 auto;
  padding: 5rem 10rem 10rem 2rem;
  max-width: 1440px;
`
