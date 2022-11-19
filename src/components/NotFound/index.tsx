import { NotFoundContainer, NotFoundText } from './styles'

export function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundText>
        Nenhum pedido foi encontrado!
        <br />
        Vá para a página inicial e faça um novo pedido!
      </NotFoundText>
    </NotFoundContainer>
  )
}
