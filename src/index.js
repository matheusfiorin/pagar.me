import * as core from "./core.js";
import * as fs from "fs";
import { apiKey, transaction } from "./example.js";

core
  .connectClient(apiKey)
  .then((client) => {
    console.info("[index] client created");
    core.createTransaction(client, transaction).then((transaction) => {
      console.info("[index] transaction created");
      fs.writeFileSync(`./logs/transaction.json`, JSON.stringify(transaction));
      console.info("[index] transaction logged to logs/transaction.json");
    });
  })
  .catch((error) => {
    console.log("[index] uncaught error:");
    console.error(error);
  });
