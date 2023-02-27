/* eslint-disable no-unused-vars */
import {
  DeliveryInfo,
  DeliveryInfoCard,
  DeliveryInfoCardIcon,
  DeliveryInfoCardText,
  DeliveryInfoCardTextGroup,
  PedidoSucessoContainer,
  PedidoSucessoImage,
  PedidoSucessoInfo,
  PedidoSucessoSubtitle,
  PedidoSucessoTitle,
  PedidoSucessoTitles,
} from './styles'

import DeliveryImage from '../../assets/SuccessImage.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { usePedido } from '../../contexts/pedido-context'

export function PedidoSucesso() {
  const { ultimoPedido } = usePedido()

  enum PaymentMethodLabel {
    credito = 'Cartão de crédito',
    debito = 'Cartão de débito',
    dinheiro = 'Dinheiro',
  }

  const metodoPagamento = PaymentMethodLabel[ultimoPedido.paymentMethod]

  return (
    <PedidoSucessoContainer>
      <PedidoSucessoInfo>
        <PedidoSucessoTitles>
          <PedidoSucessoTitle>Uhu! Pedido confirmado</PedidoSucessoTitle>
          <PedidoSucessoSubtitle>
            Agora é só aguardar que logo o café chegará até você
          </PedidoSucessoSubtitle>
        </PedidoSucessoTitles>
        <DeliveryInfo>
          <DeliveryInfoCard>
            <DeliveryInfoCardIcon color={'purple'}>
              <MapPin size={14} weight={'fill'} />
            </DeliveryInfoCardIcon>
            <DeliveryInfoCardTextGroup>
              <DeliveryInfoCardText>
                Entrega em{' '}
                <b>
                  Rua {ultimoPedido.address.rua}, {ultimoPedido.address.numero}
                </b>
              </DeliveryInfoCardText>
              <DeliveryInfoCardText>
                Farrapos - Porto Alegre, RS
              </DeliveryInfoCardText>
            </DeliveryInfoCardTextGroup>
          </DeliveryInfoCard>
          <DeliveryInfoCard>
            <DeliveryInfoCardIcon color={'yellow'}>
              <Timer size={14} weight={'fill'} />
            </DeliveryInfoCardIcon>
            <DeliveryInfoCardTextGroup>
              <DeliveryInfoCardText>Previsão de entrega</DeliveryInfoCardText>
              <DeliveryInfoCardText>
                <b>20 min - 30 min</b>
              </DeliveryInfoCardText>
            </DeliveryInfoCardTextGroup>
          </DeliveryInfoCard>
          <DeliveryInfoCard>
            <DeliveryInfoCardIcon color={'yellow-dark'}>
              <CurrencyDollar size={14} weight={'fill'} />
            </DeliveryInfoCardIcon>
            <DeliveryInfoCardTextGroup>
              <DeliveryInfoCardText>Pagamento na entrega</DeliveryInfoCardText>
              <DeliveryInfoCardText>
                <b>{metodoPagamento}</b>
              </DeliveryInfoCardText>
            </DeliveryInfoCardTextGroup>
          </DeliveryInfoCard>
        </DeliveryInfo>
      </PedidoSucessoInfo>
      <PedidoSucessoImage src={DeliveryImage} alt={''} />
    </PedidoSucessoContainer>
  )
}
