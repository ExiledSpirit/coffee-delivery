import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/cart-context'
import { PedidoContextProvider } from './contexts/pedido-context'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <PedidoContextProvider>
            <Router />
          </PedidoContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
