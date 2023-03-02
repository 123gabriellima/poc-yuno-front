# Poc yuno front

# dependencias necessarias
```
node: v16.19.0
yarn 1.22.19
```

## Para inicializar o projeto:
```
yarn start
```

## Para fazer o build do projeto:
```
yarn build
```

### Projeto com intuito de testar o uso do modal de tokenização de cartão de credito

### Quando for fazer um pagamento usando essa tela, tem 2 formas de serem feitas, seguindo o select do print:
![image](https://user-images.githubusercontent.com/119955374/222431253-5adbfb85-dff6-41f4-bd65-ad6a74e2f6e9.png)
- Via Frontend: O proprio frontend vai fazer uma chamada para o monopoly e ira completar o pagamento.
- Via postman: Após o cartão de credito ser tokenizado, o frontend vai retornar os dados necessarios para serem enviados ao monopoly e completar um pagamento utilizando a Yuno.
Exemplo do modal a baixo:
![image](https://user-images.githubusercontent.com/119955374/222432411-7ae0f751-0517-4956-83e1-7a5a6449d35d.png)

### obs: Os dados do pagamento devem ir no metadata, dentro de uma propriedade `checkoutSession`
Exemplo:

```json
{
    "items": {
        "product": "bus",
        "code": "bus-18",
        "amount": "0.01"
    },
    "customer": {
        "birthDate": "2000-04-30",
        "document": "70732082102",
        "documentType": "CPF",
        "email": "teste0000@email.net",
        "gender": "male",
        "name": "gabriel  lima",
        "type": "individual",
        "address": {
            "city": "rua castigliano",
            "complement": "apto 101",
            "country": "BR",
            "neighborhood": "Padre eustaquio",
            "number": "1386",
            "state": "MG",
            "street": "rua castigliano",
            "zip_code": "30720310"
        },
        "phones": {
            "home_phone": {
                "area_code": null,
                "country_code": "55",
                "number": "31994465304"
            },
            "mobile_phone": {
                "area_code": "31",
                "country_code": "55",
                "number": "31994465304"
            }
        }
    },
    "charges": [
        {
            "payment_method": "credit_card",
            "down_payment": true,
            "amount": "0.01",
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
        "checkoutSession": {
            "oneTimeToken": "60225195-3f4f-4125-a424-36bd725f0a53",
            "checkoutSession": "9ba48f8f-55e2-43c1-bc88-433d3bfb010c",
            "customerId": "0f119aa9-517f-4ad9-a5b9-aacc602c438a"
        }
    }
}
```
