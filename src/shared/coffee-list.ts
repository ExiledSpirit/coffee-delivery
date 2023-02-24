import traditionalCoffeeImg from '../assets/Expresso.png'
import americanoCoffeeImg from '../assets/Americano.png'
import cremosoCoffeeImg from '../assets/ExpressoCremoso.png'
import geladoCoffeeImg from '../assets/CafeGelado.png'
import comLeiteCoffeeImg from '../assets/CafeComLeite.png'
import latteCoffeeImg from '../assets/Latte.png'
import capuccinoCoffeeImg from '../assets/Capuccino.png'
import macchiatoCoffeeImg from '../assets/Macchiato.png'
import mocaccinoCoffeeImg from '../assets/Mochaccino.png'
import chocolateQuenteCoffeeImg from '../assets/ChocolateQuente.png'
import cubanoCoffeeImg from '../assets/Cubano.png'
import havaianoCoffeeImg from '../assets/Havaiano.png'
import arabeCoffeeImg from '../assets/Arabe.png'
import irlandesCoffeeImg from '../assets/Irlandes.png'

export interface CoffeeProduct {
  id: string
  imageUrl: string
  title: string
  description: string
  price: number
  badges: string[]
}

export const coffeeOptions: CoffeeProduct[] = [
  {
    id: 'coffee01',
    imageUrl: traditionalCoffeeImg,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    badges: ['tradicional'],
  },
  {
    id: 'coffee02',
    imageUrl: americanoCoffeeImg,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    badges: ['tradicional'],
  },
  {
    id: 'coffee03',
    imageUrl: cremosoCoffeeImg,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    badges: ['tradicional'],
  },
  {
    id: 'coffee04',
    imageUrl: geladoCoffeeImg,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    badges: ['tradicional', 'gelado'],
  },
  {
    id: 'coffee05',
    imageUrl: comLeiteCoffeeImg,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    badges: ['tradicional', 'com leite'],
  },
  {
    id: 'coffee06',
    imageUrl: latteCoffeeImg,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    badges: ['tradicional', 'com leite'],
  },
  {
    id: 'coffee07',
    imageUrl: capuccinoCoffeeImg,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    badges: ['tradicional', 'com leite'],
  },
  {
    id: 'coffee08',
    imageUrl: macchiatoCoffeeImg,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    badges: ['tradicional', 'com leite'],
  },
  {
    id: 'coffee09',
    imageUrl: mocaccinoCoffeeImg,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    badges: ['tradicional', 'com leite'],
  },
  {
    id: 'coffee10',
    imageUrl: chocolateQuenteCoffeeImg,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    badges: ['tradicional', 'com leite'],
  },
  {
    id: 'coffee11',
    imageUrl: cubanoCoffeeImg,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    badges: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 'coffee12',
    imageUrl: havaianoCoffeeImg,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    badges: ['especial'],
  },
  {
    id: 'coffee13',
    imageUrl: arabeCoffeeImg,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    badges: ['especial'],
  },
  {
    id: 'coffee14',
    imageUrl: irlandesCoffeeImg,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    badges: ['especial', 'alcoólico'],
  },
]
