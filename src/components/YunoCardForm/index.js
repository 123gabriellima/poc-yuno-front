import Modal from "../Modal";
import styled from "styled-components";
import initCheckoutLite from "./static/checkout-lite"
import React, { useEffect } from 'react';

export default function YunoCardForm({setShow, checkoutSession, customerData, setCustomerData, setCheckoutSessionData}) {
    useEffect( () => {
        initCheckoutLite(checkoutSession, customerData, setCustomerData, setCheckoutSessionData);
    }, [checkoutSession, customerData, setCustomerData, setCheckoutSessionData]);

    return (
        <div className="modal is-active is-centered">
            <div className="modal-background"></div>
            <ModalContent className="modal-content" >
                <Modal width={'500px'} height={'320px'}>
                    <div id="yunoCardForm"></div>
                </Modal>
            </ModalContent>
            <button className="modal-close is-large" aria-label="close" onClick={setShow}></button>
        </div>
    );
}

const ModalContent = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 420px;
`

