import styled from 'styled-components'

export const PedidoSucessoContainer = styled.div`
  display: flex;
  gap: 6.375rem;
  justify-content: space-between;
`

export const PedidoSucessoInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const PedidoSucessoTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const PedidoSucessoTitle = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-dark']};
`

export const PedidoSucessoSubtitle = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  font-stretch: 100;
`

export const DeliveryInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const DeliveryInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

type Colors = 'purple' | 'yellow' | 'yellow-dark'

interface DeliveryInfoCardIconProps {
  color: Colors
}

export const DeliveryInfoCardIcon = styled.div<DeliveryInfoCardIconProps>`
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.color]};
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const DeliveryInfoCardTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const DeliveryInfoCardText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const PedidoSucessoImage = styled.img`
  width: 30.75rem;
  height: 18.3125rem;
  align-self: end;
`
