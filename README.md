# Módulo de integração - pagar.me

O objetivo deste projeto é realizar uma simples integração ao SDK disponibilizado do `pagar.me`, de modo que se faça uma utilização `simples`, `efetiva` e `bem documentada`.

## Primeiros passos

Após a criação da loja, será gerado uma `api_key` para a utilização de toda a estrutura com base neste token de acesso.

Para a integração, é necessário apenas o módulo que eles disponibilizam no [npmjs](https://npmjs.com), e da estrutura de envio para a consolidação de cada transação.

Para visualizar a criação de um pedido inicial, rode em sua máquina `npm run create-transaction` após instalar os pacotes com `npm install`.

## Exemplos:

### Autenticando o client:

```javascript
import pagarme from "pagarme";

const connectClient = () => {
  return pagarme.client.connect({ api_key: apiKey });
};
```

### Enviando uma transação:

```javascript
import pagarme from "pagarme";

const createTransaction = (client, transaction) => {
  return client.transactions.create(transaction);
};
```

### Exemplo de JSON para transação:

```javascript
const transaction = {
  amount: 21000,
  card_number: "4111111111111111",
  card_cvv: "123",
  card_expiration_date: "0922",
  card_holder_name: "Morpheus Fishburne",
  installments: 6,
  payment_method: "credit_card",
  postback_url: "https://en5wqhoqn81sv.x.pipedream.net",
  customer: {
    external_id: "#3311",
    name: "Morpheus Fishburne",
    type: "individual",
    country: "br",
    email: "mopheus@nabucodonozor.com",
    documents: [
      {
        type: "cpf",
        number: "30621143049",
      },
    ],
    phone_numbers: ["+5511999998888", "+5511888889999"],
    birthday: "1965-01-01",
  },
  billing: {
    name: "Trinity Moss",
    address: {
      country: "br",
      state: "sp",
      city: "Cotia",
      neighborhood: "Rio Cotia",
      street: "Rua Matrix",
      street_number: "9999",
      zipcode: "06714360",
    },
  },
  shipping: {
    name: "Neo Reeves",
    fee: 1000,
    delivery_date: "2000-12-21",
    expedited: true,
    address: {
      country: "br",
      state: "sp",
      city: "Cotia",
      neighborhood: "Rio Cotia",
      street: "Rua Matrix",
      street_number: "9999",
      zipcode: "06714360",
    },
  },
  items: [
    {
      id: "r123",
      title: "Red pill",
      unit_price: 10000,
      quantity: 1,
      tangible: true,
    },
    {
      id: "b123",
      title: "Blue pill",
      unit_price: 10000,
      quantity: 1,
      tangible: true,
    },
  ],
};
```