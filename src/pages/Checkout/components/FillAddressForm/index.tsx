import { useFormContext } from 'react-hook-form'
import {
  BairroInput,
  CepInput,
  CidadeInput,
  ComplementoInput,
  Container,
  EstadoInput,
  FormContainer,
  Header,
  HeaderInfo,
  HeaderSubtitle,
  HeaderTitle,
  InputRow,
  NumeroInput,
  RuaInput,
} from './styles'
import { MapPinLine } from 'phosphor-react'

export function FillAddressForm() {
  const { register } = useFormContext()

  return (
    <Container>
      <Header>
        <MapPinLine />
        <HeaderInfo>
          <HeaderTitle>Endereço de Entrega</HeaderTitle>
          <HeaderSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </HeaderSubtitle>
        </HeaderInfo>
      </Header>
      <FormContainer>
        <CepInput id="cep" placeholder="CEP" {...register('cep')}></CepInput>
        <RuaInput id="rua" placeholder="Rua" {...register('rua')}></RuaInput>
        <InputRow>
          <NumeroInput
            id="numero"
            placeholder="Número"
            {...register('numero')}
          />
          <ComplementoInput
            id="complemento"
            placeholder="Complemento"
            {...register('complemento')}
          />
        </InputRow>
        <InputRow>
          <BairroInput
            id="bairro"
            placeholder="Bairro"
            {...register('bairro')}
          ></BairroInput>
          <CidadeInput
            id="cidade"
            placeholder="Cidade"
            {...register('cidade')}
          ></CidadeInput>
          <EstadoInput
            id="estado"
            placeholder="Estado"
            {...register('estado')}
          ></EstadoInput>
        </InputRow>
      </FormContainer>
    </Container>
  )
}
