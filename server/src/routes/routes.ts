import express from "express";
import customers from "../controllers/customers"

const routes = express.Router()

routes.get("/customers", customers.findAll);
routes.post("/customers", customers.addCustomer);
routes.get("/customers/:id", customers.findCustomerByiD);
routes.get("/customers", customers.findCustomerByName);
routes.get("/customers", customers.findCustomerByEmail);
routes.get("/customers", customers.findCustomerByPhone);
routes.put("/customers/:id", customers.updateCustomer);
routes.delete("/customers/:id", customers.deleteCustomer);

export { routes as default };
