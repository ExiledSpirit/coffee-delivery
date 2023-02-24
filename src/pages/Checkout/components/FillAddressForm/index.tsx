import { useFormContext } from 'react-hook-form'
import { FillAddressFormData } from '../../index'
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
  const {
    register,
    formState: { errors },
  } = useFormContext<FillAddressFormData>()

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
          <CepInput
            error={!!errors.cep}
            id="cep"
            placeholder="CEP"
            {...register('cep')}
          ></CepInput>
          <EstadoInput
            error={!!errors.estado}
            id="estado"
            placeholder="Estado"
            {...register('estado')}
          />
        </InputRow>
        <RuaInput
          error={!!errors.rua}
          id="rua"
          placeholder="Rua"
          {...register('rua')}
        ></RuaInput>
        <InputRow>
          <NumeroInput
            error={!!errors.numero}
            id="numero"
            placeholder="Número"
            {...register('numero')}
          />
          <ComplementoInput
            error={!!errors.complemento}
            id="complemento"
            placeholder="Complemento"
            {...register('complemento')}
          />
        </InputRow>
        <InputRow>
          <BairroInput
            error={!!errors.bairro}
            id="bairro"
            placeholder="Bairro"
            {...register('bairro')}
          />
          <CidadeInput
            error={!!errors.cidade}
            id="cidade"
            placeholder="Cidade"
            {...register('cidade')}
          />
        </InputRow>
      </FormContainer>
    </Container>
  )
}
