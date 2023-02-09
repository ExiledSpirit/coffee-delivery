import { Actions, CartButton, HeaderContainer, Location } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { useCart } from '../../contexts/cart-context'

export function Header() {
  const { overallQuantity } = useCart()

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <Actions>
        <Location>
          <MapPin weight={'fill'} size={22} />
          <p>Porto Alegre, RS</p>
        </Location>
        <CartButton>
          <ShoppingCart weight={'fill'} size={22} />
          {overallQuantity}
        </CartButton>
      </Actions>
    </HeaderContainer>
  )
}
