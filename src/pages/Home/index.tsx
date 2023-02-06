import { ProductList } from './components/ProductList'
import { HomeCover } from './components/HomeCover'
import { CoffeeSelector } from './styles'

export function Home() {
  return (
    <div>
      <HomeCover />
      <CoffeeSelector>
        <h2>Nossos Cafés</h2>
        <ProductList />
      </CoffeeSelector>
    </div>
  )
}