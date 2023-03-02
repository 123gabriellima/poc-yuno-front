import styled from "styled-components";
import { useState } from "react";
import { useObjectState } from "../Hooks/useObjectState";
import CustomerData from "./CustomerData";
import YunoCardForm from "../YunoCardForm";
import createCheckoutSession from "../../service/createCheckoutSession";
import ValueModal from "./ValueModal";
import CheckoutSessionDataModal from "./CheckoutSessionDataModal";

export default function CheckoutModal() {
    const [checkoutSessionHasBeenCreated, setCheckoutSessionHasBeenCreated] = useState(false)
    const [checkoutSession, setCheckoutSession] = useState(null);
    const [amountIsPopuled, setAmountIsPopuled] = useState(false);
    const [checkoutSessionData, setCheckoutSessionData] = useObjectState({
        oneTimeToken: "",
        checkoutSession: "",
        customerId: ""
    });
    const [customerData, setCustomerData, isCustomerFilled] = useObjectState({
        customerName: "",
        customerLastName: "",
        birthDate: "",
        cpf: "",
        sexo: "",
        cep: "",
        addressLine1: "",
        addressLine2: "",
        addressNumber: "",
        bairro: "",
        telefoneFixo: "",
        telefoneMovel: "",
        email: "",
        confirmarEmail: "",
        amount: null,
        shouldShowYunoModal: false,
        requestType: "Via Frontend",
        shouldShowCheckoutSessionModal: false
    }, "customerModal");

    if(!amountIsPopuled) {
        setCustomerData('amount', prompt('Digite um valor'))
        setAmountIsPopuled(true);
    }
    if (isCustomerFilled() && customerData.shouldShowYunoModal && !checkoutSessionHasBeenCreated) {
        (async () => {
            const checkoutSessionResult = await createCheckoutSession(customerData);
            setCheckoutSession(checkoutSessionResult);
            setCheckoutSessionHasBeenCreated(true);
        })();
    }
    function handleSetShow() {
        setCustomerData("shouldShowYunoModal", !customerData.shouldShowYunoModal);
        setCheckoutSessionHasBeenCreated(false);
    }
    return (
        <Root>
            <CustomerData
                customerData={customerData}
                setCustomerData={setCustomerData}
                isCustomerFilled={isCustomerFilled}
            />
            <ValueModal value={customerData.amount}/>
            {
                customerData.shouldShowYunoModal && checkoutSession ?
                <YunoCardForm
                    checkoutSession={checkoutSession}
                    customerData={customerData}
                    setCustomerData={setCustomerData}
                    setCheckoutSessionData={setCheckoutSessionData}
                    setShow={() => handleSetShow()}
                /> : null
            }
            {
                customerData.requestType === 'Via postman' &&
                customerData.shouldShowCheckoutSessionModal &&
                <CheckoutSessionDataModal
                    setCustomerData={setCustomerData}
                    checkoutSessionData={checkoutSessionData}
                />
            }
        </Root>
    )
}

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 400px;
  max-width: 1326px;
  margin: 0 auto;
  grid-gap: 1rem 4rem;
  padding: 6rem 2rem 6rem;
`