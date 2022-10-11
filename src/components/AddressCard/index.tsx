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
          <Input placeholder="CEP" isMediumButton />
        </InputDivider>
        <InputDivider>
          <Input placeholder="Rua" />
        </InputDivider>
        <InputDivider>
          <Input placeholder="Número" isMediumButton />
          <Input placeholder="Complemento" isOpcional />
        </InputDivider>
        <InputDivider>
          <Input placeholder="Bairro" isMediumButton />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" isSmallButton />
        </InputDivider>
      </FormCard>
    </AddressCardContainer>
  )
}
