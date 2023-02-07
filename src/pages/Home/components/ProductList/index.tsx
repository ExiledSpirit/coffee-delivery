import { Card, CoffeeList } from './styles'
import { coffeeOptions } from '../../../../shared/coffee-list'

export function ProductList() {
  return (
    <CoffeeList>
      {coffeeOptions.map((coffeeOption) => {
        return (
          <Card key={coffeeOption.id}>
            <img src={coffeeOption.imageUrl} alt="" />
          </Card>
        )
      })}
    </CoffeeList>
  )
}
