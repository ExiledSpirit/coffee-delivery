import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 2rem;
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const OptionsSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export interface PaymentOptionProps {
  selected: boolean
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  width: auto;
  height: 3.25rem;
  background: ${(props) => {
    return props.selected
      ? props.theme['purple-light']
      : props.theme['base-button']
  }};
  border: ${(props) => {
    return props.selected ? `1px solid ${props.theme.purple}` : 'none'
  }};
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
