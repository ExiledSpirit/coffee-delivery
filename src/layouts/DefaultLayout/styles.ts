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
  margin-top: 5rem;
  padding: 0 2rem 10rem 2rem;
  max-width: 90rem;
  width: 90rem;
`
