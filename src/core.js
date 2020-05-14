import pagarme from "pagarme";

const connectClient = (apiKey) => {
  console.info("[core]  creating client...");
  return pagarme.client.connect({ api_key: apiKey }).catch((error) => {
    console.error("[core] uncaught error in connectClient:");
    console.error(error);
  });
};

const createTransaction = (client, transaction) => {
  console.info("[core]  creating transaction...");
  return client.transactions.create(transaction).catch((error) => {
    console.error("[core] uncaught error in createTransaction:");
    console.error(error);
  });
};

export { connectClient, createTransaction };
