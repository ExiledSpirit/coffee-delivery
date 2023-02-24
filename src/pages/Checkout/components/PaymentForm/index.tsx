import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  Container,
  FormHeader,
  OptionsSelect,
  PaymentOption,
  Subtitle,
  Title,
  TitleContainer,
} from './styles'
import { PaymentMethodTypes } from '../..'

export interface PaymentFormProps {
  paymentMethod: PaymentMethodTypes
  setPaymentMethod: (paymentMethod: PaymentMethodTypes) => void
}

export function PaymentForm({
  paymentMethod,
  setPaymentMethod,
}: PaymentFormProps) {
  function handleClickPaymentOption(paymentOption: PaymentMethodTypes) {
    setPaymentMethod(paymentOption)
  }

  return (
    <Container>
      <FormHeader>
        <CurrencyDollar size={24} />
        <TitleContainer>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </TitleContainer>
      </FormHeader>
      <OptionsSelect>
        <PaymentOption
          onClick={() => handleClickPaymentOption('credito')}
          selected={paymentMethod === 'credito'}
          type="button"
        >
          <CreditCard />
          Cartão de crédito
        </PaymentOption>
        <PaymentOption
          onClick={() => handleClickPaymentOption('debito')}
          selected={paymentMethod === 'debito'}
          type="button"
        >
          <Bank />
          Cartão de débito
        </PaymentOption>
        <PaymentOption
          onClick={() => handleClickPaymentOption('dinheiro')}
          selected={paymentMethod === 'dinheiro'}
          type="button"
        >
          <Money />
          Dinheiro
        </PaymentOption>
      </OptionsSelect>
    </Container>
  )
}
