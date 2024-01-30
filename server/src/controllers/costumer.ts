import { Identifier, Model } from "sequelize";
import costumerModel from "../models/costumer.model";

function findAll(req: any, res: { json: (arg0: Model<any, any>[]) => any; }) {
    costumerModel.findAll().then((result) => res.json(result));
  }
  
  function findClient(req: { params: { id: Identifier | undefined; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    costumerModel.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  function addClient(req: { body: { name: string; email: string; phone: string }; }, res: { json: (arg0: Model<any, any>) => any; }) {
    costumerModel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }).then((result) => res.json(result));
  }
  
  async function updateClient(req: { body: { name: string; email: string; phone: string }; params: { id: Identifier | undefined; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    await costumerModel.update(
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
  
    costumerModel.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteClient(req: { params: { id: Identifier; }; }, res: { json: (arg0: Model<any, any>[]) => any; }) {
    await costumerModel.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    costumerModel.findAll().then((result) => res.json(result));
  }
  
  export default { findAll, addClient, findClient, updateClient, deleteClient };
