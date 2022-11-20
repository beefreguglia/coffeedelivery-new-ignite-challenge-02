import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ImageContainer,
  Pin,
  PinsContainer,
  SuccessBannerBorder,
  SuccessBannerContainer,
  Text,
} from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

const pins = ['MapPin', 'Timer', 'Dollar']

export default function SuccessBanner() {
  const { address, cardType } = useContext(OrderContext)
  return (
    <SuccessBannerBorder>
      <SuccessBannerContainer>
        <PinsContainer>
          {pins.map((pin) => (
            <>
              {pin === 'MapPin' && (
                <Pin>
                  <ImageContainer variant="purple">
                    <MapPin weight="fill" />
                  </ImageContainer>
                  <Text>
                    Entrega em{' '}
                    <span>
                      {address.street}, {address.number}
                    </span>
                    <br />
                    {address.neighborhood} - {address.city}, {address.uf}
                  </Text>
                </Pin>
              )}
              {pin === 'Timer' && (
                <Pin>
                  <ImageContainer variant="yellow">
                    <Timer weight="fill" />
                  </ImageContainer>
                  <Text>
                    Previsão de entrega
                    <br />
                    <span>20 min - 30 min</span>
                  </Text>
                </Pin>
              )}
              {pin === 'Dollar' && (
                <Pin>
                  <ImageContainer variant="darkYellow">
                    <CurrencyDollar weight="fill" />
                  </ImageContainer>
                  <Text>
                    Pagamento na entrega
                    <br />
                    <span>
                      {cardType === 'CREDIT' && 'Cartão de crédito'}
                      {cardType === 'DEBIT' && 'Cartão de débito'}
                      {cardType === 'MONEY' && 'Dinheiro'}
                    </span>
                  </Text>
                </Pin>
              )}
            </>
          ))}
        </PinsContainer>
      </SuccessBannerContainer>
    </SuccessBannerBorder>
  )
}
