import createPayment from "../../../service/createPayment";
import env from "../../../service/env";

export default async function initCheckoutLite(checkoutSession, customerData, setCustomerData, setCheckoutSessionData) {
  const countryCode = 'BR';
  const PAYMENT_METHOD_TYPE = 'CARD'
  const VAULTED_TOKEN = null
  const publicApiKey = env('REACT_APP_YUNO_PUBLIC_API_KEY');
  // eslint-disable-next-line no-undef
  const yuno = Yuno.initialize(publicApiKey)

  yuno.startCheckout({
    checkoutSession: checkoutSession.checkoutSession.checkout_session,
    elementSelector: '#yunoCardForm',
    renderMode: {
      type: 'element',
      elementSelector: '#yunoCardForm',
    },
    countryCode,
    language: 'pt',
    card: {
      styles: `
      input {
      border: 1px solid gray;
      color: gray;
    }
    
    input:focus {
      border: 2px solid black !important;
      color: black !important;
      outline: none;
    }
    .Yuno-text-field__label {
      color: #414042 !important;
    }
    .Yuno-text-field__label:hover {
      color: #414042 !important;
    }
    .Yuno-card-form__text-security, .Yuno-card-icon-bar__content, .Yuno-card-form__title, .yuno-modal__close-btn, .yuno-modal__header {
      display: none !important;
    }
    .css-efy9b1 {
    border-radius: 8px !important;
    &:not([disabled]) {
      color: #FFFFFF !important;
      background: linear-gradient(308.6deg, #F06531 -7.94%, #EA3D35 79.38%) !important
    }
    }
    `,
    },
    async yunoCreatePayment(oneTimeToken) {
      try {
        // console.log({oneTimeToken, checkoutSession, customerData, checkoutSessionToken: checkoutSession.checkoutSession.checkout_session})
        if(customerData.requestType === 'Via postman') {
          setCheckoutSessionData("oneTimeToken", oneTimeToken);
          setCheckoutSessionData("checkoutSession", checkoutSession.checkoutSession.checkout_session);
          setCheckoutSessionData("customerId", checkoutSession.customer.id);
          setCustomerData("shouldShowYunoModal", false);
          setCustomerData("shouldShowCheckoutSessionModal", true);
          return;

        }
        await createPayment({ oneTimeToken, checkoutSession, customerData })
      } catch (e) {
        alert("ocorreu um erro ao executar o pagamento")
      }
      setCustomerData("shouldShowYunoModal", false);

      // yuno.continuePayment()
    },
    /**
     * @param {'READY_TO_PAY' | 'CREATED' | 'PAYED' | 'REJECTED' | 'CANCELLED' | 'ERROR' | 'DECLINED' | 'PENDING' | 'EXPIRED' | 'VERIFIED' | 'REFUNDED'} data
     */
    yunoPaymentResult(data) {
      console.log('yunoPaymentResult', data)
    },
    /**
     * @param { error: 'CANCELED_BY_USER' | any }
     */
    yunoError: (error) => {
      console.log('There was an error', error)
    },
  })

  yuno.mountCheckoutLite({
    /**
     * can be one of 'BANCOLOMBIA_TRANSFER' | 'PIX' | 'ADDI' | 'NU_PAY' | 'MERCADO_PAGO_CHECKOUT_PRO
     */
    paymentMethodType: PAYMENT_METHOD_TYPE,
    /**
     * Vaulted token related to payment method type
     */
    valutedToken: VAULTED_TOKEN,
  })
}