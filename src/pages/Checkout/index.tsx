import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../../contexts/cart-context'
import { CafeSelecionadoCard } from './components/CafeSelecionado'
import { FillAddressForm } from './components/FillAddressForm'
import {
  CafezesSelecionadosCard,
  CafezesSelecionadosContainer,
  CafezesSelecionadosText,
  CheckoutContainer,
  CheckoutCost,
  CheckoutCostTotal,
  CheckoutCostsList,
  CheckoutInfo,
  CompletePedidoCard,
  CompletePedidoContainer,
  FinalizarPedidoButton,
  Separator,
} from './styles'
import { PaymentForm } from './components/PaymentForm'
import { useState } from 'react'

const fillAddressFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.string().min(1, 'Informe o número da residência'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  estado: zod.string().min(1, 'Informe o estado'),
})

type FillAddressFormData = zod.infer<typeof fillAddressFormValidationSchema>

export type PaymentMethodTypes = 'credito' | 'debito' | 'dinheiro'

export function Checkout() {
  const { products, totalCost } = useCart()

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodTypes>('credito')

  const deliveryCost = 3.5

  const fillAddressForm = useForm<FillAddressFormData>({
    resolver: zodResolver(fillAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  })

  return (
    <CheckoutContainer>
      <CompletePedidoContainer>
        <CafezesSelecionadosText>Complete seu pedido</CafezesSelecionadosText>
        <CompletePedidoCard>
          <FormProvider {...fillAddressForm}>
            <FillAddressForm />
          </FormProvider>
        </CompletePedidoCard>
        <CompletePedidoCard>
          <PaymentForm
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </CompletePedidoCard>
      </CompletePedidoContainer>
      <CafezesSelecionadosContainer>
        <CafezesSelecionadosText>Cafés selecionados</CafezesSelecionadosText>
        <CafezesSelecionadosCard>
          {products.map((product) => {
            return (
              <>
                <CafeSelecionadoCard
                  key={product.coffee.id}
                  coffee={product.coffee}
                />
                <Separator />
              </>
            )
          })}
          <CheckoutInfo>
            <CheckoutCostsList>
              <CheckoutCost>
                <p>Total de itens</p>
                <h2>R$ {totalCost.toFixed(2)}</h2>
              </CheckoutCost>
              <CheckoutCost>
                <p>Entrega</p>
                <h2>R$ {deliveryCost.toFixed(2)}</h2>
              </CheckoutCost>
              <CheckoutCostTotal>
                <p>Total</p>
                <h2>R$ {(totalCost + deliveryCost).toFixed(2)}</h2>
              </CheckoutCostTotal>
            </CheckoutCostsList>
            <FinalizarPedidoButton>Confirmar Pedido</FinalizarPedidoButton>
          </CheckoutInfo>
        </CafezesSelecionadosCard>
      </CafezesSelecionadosContainer>
    </CheckoutContainer>
  )
}
