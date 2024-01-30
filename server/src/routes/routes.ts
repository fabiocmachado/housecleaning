import express from "express";
import customers from "../controllers/customers"

const routes = express.Router();

routes.get("/customers", customers.findAll);
routes.post("/customers", customers.addClient);
routes.get("/customers/:id", customers.findClientByiD);
routes.get("/customers/:name", customers.findClientByName);
routes.put("/customers/:id", customers.updateClient);
routes.delete("/customers/:id", customers.deleteClient);

export { routes as default };
