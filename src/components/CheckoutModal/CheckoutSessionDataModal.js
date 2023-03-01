import Modal from "../Modal";
import styled from "styled-components";

export default function CheckoutSessionDataModal({checkoutSessionData, setCustomerData}) {
    function handleClick() {
        setCustomerData("shouldShowCheckoutSessionModal", false);
    }

    return (
        <div className="modal is-active is-centered">
            <div className="modal-background"></div>
            <ModalContent className="modal-content" >
                <Modal width={'500px'} height={'320px'}>
                    <ModalInternalDiv>
                        <h2>oneTimeToken: <b>{checkoutSessionData.oneTimeToken}</b></h2>
                        <h2>checkoutSession: <b> {checkoutSessionData.checkoutSession}</b></h2>
                        <h2>customerId: <b>{checkoutSessionData.customerId}</b></h2>
                    </ModalInternalDiv>
                </Modal>
            </ModalContent>
            <button className="modal-close is-large" aria-label="close" onClick={() => handleClick()}></button>
        </div>
    );
}

const ModalContent = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 300px;
`

const ModalInternalDiv = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
`