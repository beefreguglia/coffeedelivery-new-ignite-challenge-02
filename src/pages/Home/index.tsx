import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { CardsContainer, CoffeesContainer, HomeContainer } from './styles'

interface Coffee {
  id: number
  name: string
  description: string
  image: string
  pins: string[]
  price: number
}

const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: 'Expresso',
    pins: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: 'Americano',
    pins: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: 'ExpressoCremoso',
    pins: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: 'CafeGelado',
    pins: ['Tradicional', 'gelado'],
    price: 9.9,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: 'CafeComLeite',
    pins: ['Tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: 'Latte',
    pins: ['Tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: 'Capuccino',
    pins: ['Tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: 'Macchiato',
    pins: ['Tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 9,
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: 'Mochaccino',
    pins: ['Tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: 'ChocolateQuente',
    pins: ['especial', 'com leite'],
    price: 9.9,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: 'Cubano',
    pins: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: 'Havaiano',
    pins: ['especial'],
    price: 9.9,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: 'Arabe',
    pins: ['especial'],
    price: 9.9,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: 'Irlandes',
    pins: ['especial', 'alcoólico'],
    price: 9.9,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeesContainer>
        <h1>Nossos Cafés</h1>
        <CardsContainer>
          {coffees.map(({ id, image, name, description, pins, price }) => (
            <Card
              key={id}
              image={image}
              description={description}
              name={name}
              pins={pins}
              price={price}
            />
          ))}
        </CardsContainer>
      </CoffeesContainer>
    </HomeContainer>
  )
}
