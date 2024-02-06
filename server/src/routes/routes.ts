import express from "express";
import customers from "../controllers/customers";

const routes = express.Router();

routes.get("/customers", customers.findAll);
routes.post("/customers", customers.addCustomer);
routes.get("/customers/:id", customers.findCustomerByiD);
routes.get("/customers/name/:name", customers.findCustomerByName);
routes.get("/customers/email/:email", customers.findCustomerByEmail);
routes.get("/customers/phone/:phone", customers.findCustomerByPhone);
routes.put("/customers/:id", customers.updateCustomer);
routes.delete("/customers/:id", customers.deleteCustomer);

export default routes;