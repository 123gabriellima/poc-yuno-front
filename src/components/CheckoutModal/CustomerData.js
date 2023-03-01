import Modal from "../Modal";
import styled from "styled-components";
import InputWithLabel from "./InputWithLabel";

export default function CustomerData({customerData, setCustomerData, isCustomerFilled}) {
    function handleClick() {
        if(!isCustomerFilled()) {
            alert("preencha todos os dados do customer antes de abrir o modal de pagamento!");
            return;
        }
        setCustomerData("shouldShowYunoModal", true)
    }
    return (
        <Modal width={"900px"} height={'1200px'} >
            <Root>
                <FormDivName>
                    <InputWithLabel label={'Nome'} placeholder={'Ex: João Paulo'} height={'3.5rem'} width={'300px'} value={customerData.customerName} handleChange={(event) => setCustomerData("customerName", event.target.value)} />
                    <InputWithLabel label={'Sobrenome Completo'} placeholder={'da Silva'} height={'3.5rem'} width={'450px'} value={customerData.customerLastName} handleChange={(event) => setCustomerData("customerLastName", event.target.value)}/>
                </FormDivName>
                <FormDivUserData>
                    <InputWithLabel label={'Nascimento'} placeholder={'Ex: 20/10/1987'} height={'3.5rem'} width={'200px'} value={customerData.birthDate} handleChange={(event) => setCustomerData("birthDate", event.target.value)}/>
                    <InputWithLabel label={'CPF'} placeholder={'Ex: 575.964.830-62'} height={'3.5rem'} width={'280px'} value={customerData.cpf} handleChange={(event) => setCustomerData("cpf", event.target.value)}/>
                    <InputWithLabel type={'select'} label={'Sexo:'} placeholder={'Selecione'} height={'3.5rem'} width={'200px'} options={['Masculino', 'Feminino']} value={customerData.sexo} handleChange={(event) => setCustomerData("sexo", event.target.value)}/>
                </FormDivUserData>
                <FormDivCardAddress>
                    <CardAddressSectionTitle>Endereço da fatura do cartão</CardAddressSectionTitle>
                    <CepDiv>
                        <InputWithLabel label={'CEP'} placeholder={'Ex: 757505-640'} height={'3.5rem'} width={'200px'} value={customerData.cep} handleChange={(event) => setCustomerData("cep", event.target.value)}/>
                        <LinkDoesntKnowCep href="http://www.buscacep.correios.com.br/sistemas/buscacep/">Esqueceu o CEP?</LinkDoesntKnowCep>
                    </CepDiv>
                    <AddressDiv>
                        <InputWithLabel label={'Logradouro'} placeholder={'Ex: Av.Brasil'} height={'3.5rem'} width={'600px'} value={customerData.addressLine1} handleChange={(event) => setCustomerData("addressLine1", event.target.value)}/>
                        <InputWithLabel label={'Numero'} placeholder={'Ex: 890'} height={'3.5rem'} width={'150px'} value={customerData.addressNumber} handleChange={(event) => setCustomerData("addressNumber", event.target.value)}/>
                    </AddressDiv>
                    <AddressDivOneLine>
                        <InputWithLabel label={'Complemento'} placeholder={'Ex: Bloco 6 | Ap. 104'} height={'3.5rem'} width={'250px'} value={customerData.addressLine2} handleChange={(event) => setCustomerData("addressLine2", event.target.value)}/>
                        <InputWithLabel label={'Bairro'} placeholder={'Ex: Centro'} height={'3.5rem'} width={'480px'} value={customerData.bairro} handleChange={(event) => setCustomerData("bairro", event.target.value)}/>
                    </AddressDivOneLine>
                    <AddressDiv>
                        <InputWithLabel label={'Telefone fixo'} placeholder={'(__) _____-____'} height={'3.5rem'} type={'tel'} width={'350px'} value={customerData.telefoneFixo} handleChange={(event) => setCustomerData("telefoneFixo", event.target.value)}/>
                        <InputWithLabel label={'Telefone movel'} placeholder={'(__) _____-____'} height={'3.5rem'} type={'tel'} width={'350px'} value={customerData.telefoneMovel} handleChange={(event) => setCustomerData("telefoneMovel", event.target.value)}/>
                        <InputWithLabel label={'E-mail'} placeholder={'Digite o e-mail'} type={'email'} height={'3.5rem'} width={'350px'} value={customerData.email} handleChange={(event) => setCustomerData("email", event.target.value)}/>
                        <InputWithLabel label={'Confiem o E-mail'} placeholder={'Confirme o e-mail'} type={'email'} height={'3.5rem'} width={'350px'} value={customerData.confirmarEmail} handleChange={(event) => setCustomerData("confirmarEmail", event.target.value)}/>
                    </AddressDiv>
                    <AddressDivButtonAndValue>
                        <InputWithLabel type={'select'} label={'Como deseja fazer a requisição'} placeholder={'Selecione'} height={'3.5rem'} width={'230px'} options={['Via Frontend', 'Via postman']} value={customerData.requestType} handleChange={(event) => setCustomerData("requestType", event.target.value)}/>
                        <ButtonShowYunoModal onClick={() => handleClick()}>Abrir Yuno Modal</ButtonShowYunoModal>
                    </AddressDivButtonAndValue>
                </FormDivCardAddress>
            </Root>
    </Modal>
    )
}


const Root = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`

const FormDivName = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    width: 100%;
`
const FormDivUserData = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 4rem;
`

const FormDivCardAddress = styled.div`
  width: 100%;
`
const CardAddressSectionTitle = styled.span`
  float: left;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
`
const CepDiv = styled.div`
  clear: both;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between
`

const LinkDoesntKnowCep = styled.a`
  color: #F05929;
  text-decoration: underline;
  font-weight: normal;
  cursor: pointer;
`

const AddressDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  column-gap: 4rem;
  width: 100%;
`

const AddressDivButtonAndValue = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  column-gap: 4rem;
  width: 100%;
  align-items: center;
`

const AddressDivOneLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`

const ButtonShowYunoModal = styled.button`
  width: 200px;
  height: 3.2rem;
  color: #FFFFFF;
  background: linear-gradient(308.6deg, #F06531 -7.94%, #EA3D35 79.38%);
  --ripple-color: #FFFFFF;
  border-radius: 1rem;
  padding: 0.9rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.95rem;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
`