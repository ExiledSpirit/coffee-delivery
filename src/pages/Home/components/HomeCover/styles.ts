import styled from 'styled-components'

export const Cover = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5rem 0;
  gap: 3.5rem;

  .background {
    position: absolute;
    filter: blur(80px);
  }
`

export const CoverText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const CoverTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoverItensGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

const STATUS_COLORS = {
  darkYellow: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

export interface coverItemCardProps {
  iconColor: keyof typeof STATUS_COLORS
}

export const CoverItemCard = styled.div<coverItemCardProps>`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  text-align: center;
  align-items: center;

  div {
    padding: 0.5rem;
    border-radius: 1000px;
    background-color: black;
    color: #fff;
    display: flex;
    align-items: center;
    height: 32px;
    width: 32px;
    background: ${(props) => props.theme[STATUS_COLORS[props.iconColor]]};
  }

  p {
    text-align: start;
    font-size: 1rem;
  }
`

export const CoverImage = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`
