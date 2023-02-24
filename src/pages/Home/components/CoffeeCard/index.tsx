import {
  Card,
  CartButton,
  CartControls,
  CartQuantity,
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
import { useCart } from '../../../../contexts/cart-context'
import { useState } from 'react'

interface CoffeeCardProps {
  coffee: CoffeeProduct
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { products, addProduct, updateProductQuantity } = useCart()

  const [quantity, setQuantity] = useState(1)

  const cartQuantity = products.find(
    (product) => product.coffee.id === coffee.id,
  )?.quantity

  const onCart: boolean = !!products.find(
    (product) => product.coffee.id === coffee.id,
  )

  function handleAddQuantity() {
    setQuantity((previousQuantity) => previousQuantity + 1)
  }

  function handleReduceQuantity() {
    setQuantity((previousQuantity) => {
      if (previousQuantity <= 1) return previousQuantity
      return previousQuantity - 1
    })
  }

  function handleAddProduct() {
    setQuantity(1)
    if (onCart) {
      updateProductQuantity(coffee.id, quantity)
      return
    }
    addProduct(coffee, quantity)
  }

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
              <QuantityButton onClick={handleReduceQuantity}>
                <Minus size={16} />
              </QuantityButton>
              {quantity}
              <QuantityButton onClick={handleAddQuantity}>
                <Plus size={16} />
              </QuantityButton>
            </Quantity>
            <CartButton onClick={handleAddProduct}>
              <ShoppingCart weight={'fill'} size={22} />
              <CartQuantity show={(cartQuantity || 0) > 0}>
                <p>{cartQuantity}</p>
              </CartQuantity>
            </CartButton>
          </CartControls>
        </Controls>
      </Info>
    </Card>
  )
}
