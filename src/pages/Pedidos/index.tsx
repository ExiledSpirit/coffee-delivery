import { SmileySad } from 'phosphor-react'
import { usePedido } from '../../contexts/pedido-context'
import { PedidoCard } from './components/PedidoCard'
import {
  ListaVaziaContainer,
  ListaVaziaMensagem,
  PedidosContainer,
  PedidosList,
} from './styles'

export function Pedidos() {
  const { pedidos } = usePedido()

  const mostrarLista = pedidos.length > 0

  return (
    <PedidosContainer>
      {mostrarLista ? (
        <PedidosList>
          {pedidos.map((pedido) => {
            return <PedidoCard key={pedido.id} pedido={pedido}></PedidoCard>
          })}
        </PedidosList>
      ) : (
        <ListaVaziaContainer>
          <SmileySad size={32} />
          <ListaVaziaMensagem>
            Sua lista está vazia. Volte aqui quando tiver efetuado ao menos um
            pedido.
          </ListaVaziaMensagem>
        </ListaVaziaContainer>
      )}
    </PedidosContainer>
  )
}
