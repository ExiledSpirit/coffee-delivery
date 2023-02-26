/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Pedido } from '../../../../contexts/pedido-context'
import { Separator } from '../../../Checkout/styles'
import {
  CardColumn,
  CardColumnContent,
  CardColumnTitle,
  CardColumnValue,
  CardContainer,
  CardRow,
  PedidoDate,
  PedidoProductCard,
  PedidoProductList,
  ShowDetails,
} from './styles'

interface PedidoCardProps {
  pedido: Pedido
}

enum PaymentMethodLabel {
  credito = 'Cartão de crédito',
  debito = 'Cartão de débito',
  dinheiro = 'Dinheiro',
}

export function PedidoCard({ pedido }: PedidoCardProps) {
  const { products } = pedido

  const [showProducts, setShowProducts] = useState(false)

  function showDetailsHandler() {
    setShowProducts((prev) => !prev)
  }

  return (
    <CardContainer>
      <PedidoDate>
        {new Date(pedido.dataPedido).toLocaleDateString()}
      </PedidoDate>
      <CardRow>
        <CardColumn>
          <CardColumnContent>
            <CardColumnTitle>Pedido</CardColumnTitle>
            <CardColumnValue>{pedido.id}</CardColumnValue>
          </CardColumnContent>
        </CardColumn>
        <CardColumn>
          <CardColumnContent>
            <CardColumnTitle>Preço</CardColumnTitle>
            <CardColumnValue>{`R$ ${pedido.custo.toFixed(2)}`}</CardColumnValue>
          </CardColumnContent>
        </CardColumn>
        <CardColumn>
          <CardColumnContent>
            <CardColumnTitle>Método de Pagamento</CardColumnTitle>
            <CardColumnValue>
              {PaymentMethodLabel[pedido.paymentMethod]}
            </CardColumnValue>
          </CardColumnContent>
        </CardColumn>
        <ShowDetails type="button" onClick={showDetailsHandler}>
          Mostrar detalhes
        </ShowDetails>
      </CardRow>
      <PedidoProductList show={showProducts}>
        <Separator />
        {products.map((produto) => {
          return (
            <PedidoProductCard key={produto.coffee.id}>
              {produto.coffee.title}
            </PedidoProductCard>
          )
        })}
      </PedidoProductList>
    </CardContainer>
  )
}
