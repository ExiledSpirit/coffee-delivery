import {
  Card,
  CartButton,
  CartControls,
  Cifrao,
  Controls,
  Description,
  Info,
  Price,
  Quantity,
  QuantityButton,
  Tag,
  Tags,
  Title,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeProduct } from '../../../../shared/coffee-list'

interface CoffeeCardProps {
  coffee: CoffeeProduct
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <Card key={coffee.id}>
      <img src={coffee.imageUrl} alt="" />
      <Info>
        <Tags>
          {coffee.badges.map((badge) => {
            return (
              <Tag key={badge}>
                <p>{badge}</p>
              </Tag>
            )
          })}
        </Tags>
        <Title>{coffee.title}</Title>
        <Description>{coffee.description}</Description>
        <Controls>
          <Price>
            <Cifrao>R$</Cifrao>9,90
          </Price>
          <CartControls>
            <Quantity>
              <QuantityButton>
                <Minus size={16} />
              </QuantityButton>
              {coffee.quantity}
              <QuantityButton>
                <Plus size={16} />
              </QuantityButton>
            </Quantity>
            <CartButton>
              <ShoppingCart weight={'fill'} size={22} />
            </CartButton>
          </CartControls>
        </Controls>
      </Info>
    </Card>
  )
}
