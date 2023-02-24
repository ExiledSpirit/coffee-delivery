import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../../../contexts/cart-context'
import { CoffeeProduct } from '../../../../shared/coffee-list'
import {
  CardControls,
  CartControls,
  CoffeeIcon,
  CoffeeInfo,
  Container,
  Price,
  Quantity,
  QuantityButton,
  RemoveButton,
} from './styles'
import { useEffect, useState } from 'react'

interface CafeSelecionadoCardProps {
  coffee: CoffeeProduct
}

export function CafeSelecionadoCard({ coffee }: CafeSelecionadoCardProps) {
  const { products, removeProduct, updateProductQuantity } = useCart()

  const [quantity, setQuantity] = useState(
    products.find((product) => product.coffee.id === coffee.id)?.quantity || 1,
  )

  const preco = quantity * coffee.price

  useEffect(() => {
    updateProductQuantity(coffee.id, quantity)
  }, [quantity, coffee, updateProductQuantity])

  function handleAddQuantity() {
    setQuantity((previousQuantity) => previousQuantity + 1)
  }

  function handleReduceQuantity() {
    setQuantity((previousQuantity) => {
      if (previousQuantity <= 1) return previousQuantity
      return previousQuantity - 1
    })
  }

  function handleRemoveProduct() {
    removeProduct(coffee.id)
  }

  return (
    <Container>
      <CoffeeInfo>
        <CoffeeIcon src={coffee.imageUrl} alt={coffee.title} />
        <CardControls>
          <p>{coffee.title}</p>
          <CartControls>
            <Quantity>
              <QuantityButton onClick={handleReduceQuantity} type="button">
                <Minus size={14} />
              </QuantityButton>
              {quantity}
              <QuantityButton onClick={handleAddQuantity} type="button">
                <Plus size={14} />
              </QuantityButton>
            </Quantity>
            <RemoveButton onClick={handleRemoveProduct} type="button">
              <Trash size={16} />
              Remover
            </RemoveButton>
          </CartControls>
        </CardControls>
      </CoffeeInfo>
      <Price>R$ {preco.toFixed(2)}</Price>
    </Container>
  )
}
