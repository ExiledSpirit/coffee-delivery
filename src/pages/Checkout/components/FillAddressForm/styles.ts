import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const HeaderTitle = styled.h1`
  font-weight: 400;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const HeaderSubtitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
  width: 35rem;
`

export const Label = styled.label`
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
`

const BaseInput = styled.input`
  padding: 0.75rem;
  height: 2.625rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`

export const RuaInput = styled(BaseInput)`
  width: 100%;
`

export const InputRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 100%;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
`

export const NumeroInput = styled(BaseInput)`
  flex: 0.37;
`

export const ComplementoInput = styled(BaseInput)`
  flex: 0.63;
`

export const BairroInput = styled(BaseInput)`
  flex: 1 1 0;
`

export const CidadeInput = styled(BaseInput)`
  flex: 1 1 0;
`

export const EstadoInput = styled(BaseInput)`
  width: 5rem;
`
