import { Identifier, Model } from "sequelize";
import customerModel from "../models/customers.model";

function findAll(req: any, res: { json: (arg0: Model<any, any>[]) => any; }) {
  customerModel.findAll().then((result) => res.json(result));
  }
  
  function findClientByiD(req: { params: { id: Identifier; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    customerModel.findByPk(req.params.id).then((result) => res.json(result));
  }

  function findClientByName(req: { params: { name: string; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    customerModel.findOne({where: {name: req.params.name}}).then((result) => res.json(result));
  }
  
  function addClient(req: { body: { name: string; email: string; phone: string }; }, res: { json: (arg0: Model<any, any>) => any; }) {
    customerModel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }).then((result) => res.json(result));
  }
  
  async function updateClient(req: { body: { name: string; email: string; phone: string }; params: { id: Identifier | undefined; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    await customerModel.update(
      {
        nome: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  
    customerModel.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteClient(req: { params: { id: Identifier; }; }, res: { json: (arg0: Model<any, any>[]) => any; }) {
    await customerModel.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    customerModel.findAll().then((result) => res.json(result));
  }
  
  export default { findAll, addClient, findClientByiD, findClientByName, updateClient, deleteClient };
