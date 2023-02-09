import {
  Actions,
  CartButton,
  CartQuantity,
  FixedHeader,
  HeaderContainer,
  Location,
} from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { useCart } from '../../contexts/cart-context'
import { useCallback, useEffect, useState } from 'react'

export function Header() {
  const { overallQuantity } = useCart()

  const [y, setY] = useState(window.scrollY)

  const [scrollUp, setScrollUp] = useState(false)

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        setScrollUp(true)
      } else if (y < window.scrollY) {
        setScrollUp(false)
      }
      setY(window.scrollY)
    },
    [y],
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <FixedHeader scroll={scrollUp || y === 0}>
      <HeaderContainer>
        <img src={Logo} alt="" />

        <Actions>
          <Location>
            <MapPin weight={'fill'} size={22} />
            <p>Porto Alegre, RS</p>
          </Location>
          <CartButton>
            <ShoppingCart weight={'fill'} size={22} />
            <CartQuantity>
              <p>{overallQuantity}</p>
            </CartQuantity>
          </CartButton>
        </Actions>
      </HeaderContainer>
    </FixedHeader>
  )
}
