import { useCart } from '../../../../contexts/cart-context'
import { CoffeeProduct } from '../../../../shared/coffee-list'
import {
  CardControls,
  CoffeeIcon,
  CoffeeInfo,
  Container,
  Price,
} from './styles'

interface CafeSelecionadoCardProps {
  coffee: CoffeeProduct
}

export function CafeSelecionadoCard({ coffee }: CafeSelecionadoCardProps) {
  const { products } = useCart()

  const quantidade =
    products.find((product) => product.coffee.id === coffee.id)?.quantity || 1

  const preco = quantidade * coffee.price

  return (
    <Container>
      <CoffeeInfo>
        <CoffeeIcon src={coffee.imageUrl} alt={coffee.title} />
        <CardControls>
          <p>{coffee.title}</p>
          <p>Quantidade: {quantidade}</p>
        </CardControls>
      </CoffeeInfo>
      <Price>R$ {preco.toFixed(2)}</Price>
    </Container>
  )
}
