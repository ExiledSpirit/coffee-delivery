import { useCart } from '../../contexts/cart-context'
import { CoffeeList } from './components/CoffeeList'
import { HomeCover } from './components/HomeCover'
import { CoffeeSelector } from './styles'

export function Home() {
  const teste = useCart()

  console.log(teste)

  return (
    <div>
      <HomeCover />
      <CoffeeSelector>
        <h2>Nossos Cafés</h2>
        <CoffeeList />
      </CoffeeSelector>
    </div>
  )
}
