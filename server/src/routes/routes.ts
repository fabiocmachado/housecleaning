import express from "express";
import costumers from "../controllers/costumer"

const routes = express.Router();

routes.get("/costumers", costumers.findAll);
routes.post("/costumers", costumers.addClient);
routes.get("/costumers/:id", costumers.findClient);
routes.put("/costumers/:id", costumers.updateClient);
routes.delete("/costumers/:id", costumers.deleteClient);

export { routes as default };
