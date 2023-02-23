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
  Label,
  NumeroInput,
  RuaInput,
} from './styles'
import { MapPinLine } from 'phosphor-react'

export function FillAddressForm() {
  const { register } = useFormContext()
  return (
    <Container>
      <Header>
        <MapPinLine size={24} />
        <HeaderInfo>
          <HeaderTitle>Endereço de Entrega</HeaderTitle>
          <HeaderSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </HeaderSubtitle>
        </HeaderInfo>
      </Header>
      <FormContainer>
        <InputRow>
          <CepInput id="cep" placeholder="CEP" {...register('cep')}></CepInput>
          <EstadoInput
            id="estado"
            placeholder="Estado"
            {...register('estado')}
          />
        </InputRow>
        <RuaInput id="rua" placeholder="Rua" {...register('rua')}></RuaInput>
        <InputRow>
          <NumeroInput
            id="numero"
            placeholder="Número"
            {...register('numero')}
          />
          <Label htmlFor="complemento">opcional</Label>
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
          />
          <CidadeInput
            id="cidade"
            placeholder="Cidade"
            {...register('cidade')}
          />
        </InputRow>
      </FormContainer>
    </Container>
  )
}
