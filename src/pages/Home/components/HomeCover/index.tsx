import {
  Cover,
  CoverImage,
  CoverItemCard,
  CoverItensGrid,
  CoverText,
  CoverTextTitle,
} from './styles'
import HomeCoverIcon from '../../../../assets/HomeCoverIcon.png'
import HomeCoverBackground from '../../../../assets/HomeCoverBackground.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function HomeCover() {
  return (
    <Cover>
      <img className="background" src={HomeCoverBackground} alt={''} />
      <CoverText>
        <CoverTextTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o café delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </CoverTextTitle>
        <CoverItensGrid>
          <CoverItemCard iconColor={'darkYellow'}>
            <div>
              <ShoppingCart size={16} weight={'fill'}></ShoppingCart>
            </div>
            <p>Compra simples e segura</p>
          </CoverItemCard>
          <CoverItemCard iconColor={'gray'}>
            <div>
              <Package size={16} weight={'fill'}></Package>
            </div>
            <p>Embalagem mantém o café intacto</p>
          </CoverItemCard>
          <CoverItemCard iconColor={'yellow'}>
            <div>
              <Timer size={16} weight={'fill'}></Timer>
            </div>
            <p>Entrega rápida e rastreada</p>
          </CoverItemCard>
          <CoverItemCard iconColor={'purple'}>
            <div>
              <Coffee size={16} weight={'fill'}></Coffee>
            </div>
            <p>O café chega fresquinho até você</p>
          </CoverItemCard>
        </CoverItensGrid>
      </CoverText>
      <CoverImage src={HomeCoverIcon} alt="" />
    </Cover>
  )
}
