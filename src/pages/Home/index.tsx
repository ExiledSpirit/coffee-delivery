import { HomeCoffeeCard } from './components/HomeCoffeeCard'
import { HomeCover } from './components/HomeCover'
import { CoffeeList, CoffeeSelector } from './styles'

export function Home() {
  return (
    <div>
      <HomeCover />
      <CoffeeSelector>
        <h2>Nossos Cafés</h2>
        <CoffeeList>
          <HomeCoffeeCard />
          <HomeCoffeeCard />
          <HomeCoffeeCard />
          <HomeCoffeeCard />
          <HomeCoffeeCard />
          <HomeCoffeeCard />
          <HomeCoffeeCard />
          <HomeCoffeeCard />
        </CoffeeList>
      </CoffeeSelector>
    </div>
  )
}
