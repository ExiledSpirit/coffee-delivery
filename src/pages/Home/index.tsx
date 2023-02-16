import { CoffeeList } from './components/CoffeeList'
import { HomeCover } from './components/HomeCover'
import { CoffeeSelector, CoffeeSelectorTitle } from './styles'

export function Home() {
  return (
    <div>
      <HomeCover />
      <CoffeeSelector>
        <CoffeeSelectorTitle>Nossos Cafés</CoffeeSelectorTitle>
        <CoffeeList />
      </CoffeeSelector>
    </div>
  )
}
