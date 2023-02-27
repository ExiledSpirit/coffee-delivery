import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Pedidos } from './pages/Pedidos'
import { PedidoSucesso } from './pages/PedidoSucesso'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucesso" element={<PedidoSucesso />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Route>
    </Routes>
  )
}
