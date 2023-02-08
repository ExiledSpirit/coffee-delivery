import { CoffeeGrid } from './styles'
import { coffeeOptions } from '../../../../shared/coffee-list'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeList() {
  return (
    <CoffeeGrid>
      {coffeeOptions.map((coffeeOption) => {
        return <CoffeeCard key={coffeeOption.id} coffee={coffeeOption} />
      })}
    </CoffeeGrid>
  )
}
