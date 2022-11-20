import { MapPinLine } from 'phosphor-react'
import Input from '../Input'
import {
  AddressCardContainer,
  FormCard,
  MainTitle,
  CardTitle,
  TitleContainer,
  Text,
  InputDivider,
  DoubleInputDivider,
  TripleInputDivider,
  InputDividerLarge,
} from './styles'

export default function AddressCard() {
  return (
    <AddressCardContainer>
      <MainTitle>Complete seu pedido</MainTitle>
      <FormCard>
        <TitleContainer>
          <MapPinLine size={22} />
          <CardTitle>Endereço de entrega</CardTitle>
        </TitleContainer>
        <Text>Informe o endereço onde deseja receber seu pedido</Text>
        <InputDivider>
          <Input placeholder="CEP" id="CEP" isMediumButton />
        </InputDivider>
        <InputDividerLarge>
          <Input placeholder="Rua" id="street" />
        </InputDividerLarge>
        <DoubleInputDivider>
          <Input
            id="number"
            placeholder="Número"
            isMediumButton
            type="number"
          />
          <Input placeholder="Complemento" isOpcional id="complement" />
        </DoubleInputDivider>
        <TripleInputDivider>
          <Input placeholder="Bairro" id="neighborhood" isMediumButton />
          <Input id="city" placeholder="Cidade" />
          <Input id="UF" placeholder="UF" isSmallButton />
        </TripleInputDivider>
      </FormCard>
    </AddressCardContainer>
  )
}
