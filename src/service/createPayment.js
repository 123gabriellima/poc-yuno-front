import axios from "axios";

export default async function createPayment(input) {
    const { oneTimeToken, checkoutSession } = input;
    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer d4bf42ce-7bf0-4f1f-8699-8c477f8b4a45'
    };
    const data = {
        "items": {
            "product": "bus",
            "code": "bus-18",
            "amount": input.customerData.amount
        },
        "customer": {
            "birthDate": input.customerData.birthDate,
            "document": input.customerData.cpf,
            "documentType": "CPF",
            "email": input.customerData.email,
            "gender": "male",
            "name": `${input.customerData.customerName}  ${input.customerData.customerLastName}`,
            "type": "individual",
            "address": {
                "city": input.customerData.addressLine1,
                "complement": input.customerData.addressLine2,
                "country": "BR",
                "neighborhood": input.customerData.bairro,
                "number": input.customerData.addressNumber,
                "state": "MG",
                "street": input.customerData.addressLine1,
                "zip_code": input.customerData.cep
            },
            "phones": {
                "home_phone": {
                    "area_code": null,
                    "country_code": "55",
                    "number": input.customerData.telefoneFixo
                },
                "mobile_phone": {
                    "area_code": "31",
                    "country_code": "55",
                    "number": input.customerData.telefoneMovel
                }
            }
        },
        "charges": [
            {
                "payment_method": "credit_card",
                "down_payment": true,
                "amount": input.customerData.amount,
                "credit_card": {
                    "capture": false,
                    "installments": 1,
                    "statement_descriptor": "123Milhas",
                    "card": {
                        "number": "4000000000000010",
                        "brand": "visa",
                        "holder_name": "Paulo V C Souza",
                        "exp_month": 12,
                        "exp_year": 30,
                        "cvv": "326"
                    }
                }
            }
        ],
        "metadata": {
            "antifraud": {
                "service_start_date": "2023-01-15T06:00:00.000Z",
                "origin": "123_Onibus",
                "channel_id": "desktop",
                "browser": {
                    "ip": "20.0.16.225",
                    "host": "monopoly.123milhas.com",
                    "host_name": "20.0.16.225",
                    "user_agent": "axios/0.27.2",
                    "type": "application/json",
                    "session_id": "gLK21eRuJVtXvrb4KcWQJPDTrvCmeeIsRMuBJoK3-932277"
                },
                "departure": {
                    "origin_city": "Belo Horizonte - MG",
                    "destination_city": "Ouro Preto - MG",
                    "date": "2023-01-15T06:00:00.000Z",
                    "company": "PASSARO VERDE"
                },
                "return": null,
                "passengers": [
                    {
                        "name": `${input.customerData.customerName}  ${input.customerData.customerLastName}`,
                        "document": input.customerData.cpf,
                        "document_type": "CPF"
                    }
                ]
            },
            checkoutSession: {
                oneTimeToken,
                checkoutSession: checkoutSession.checkoutSession.checkout_session,
                customerId: checkoutSession.customer.id
            }
        }
    };

    const response = await axios.post(`http://monopoly.docker/api/payment`, data, {headers})
    return response.data
}