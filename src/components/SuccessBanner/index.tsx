import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ImageContainer,
  Pin,
  PinsContainer,
  SuccessBannerBorder,
  SuccessBannerContainer,
  Text,
} from './styles'

const pins = ['MapPin', 'Timer', 'Dollar']

export default function SuccessBanner() {
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
                    Entrega em <span>Rua João Daniel Martinelli, 102</span>
                    <br />
                    Farrapos - Porto Alegre, RS
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
                    <span>Cartão de Crédito</span>
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
