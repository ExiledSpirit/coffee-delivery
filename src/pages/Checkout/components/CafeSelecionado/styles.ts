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

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeeIcon = styled.img`
  height: 4rem;
  width: 4rem;
`

export const Price = styled.p`
  font-family: 'Baloo 2' sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  text-align: right;
`
