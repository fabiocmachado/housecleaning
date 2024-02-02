import { Identifier, Model } from "sequelize";
import customerModel from "../models/customers.model";

function findAll(req: any, res: { json: (arg0: Model<any, any>[]) => any; }) {
  customerModel.findAll().then((result) => res.json(result));
  }
  
  function findCustomerByiD(req: { params: { id: Identifier; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    customerModel.findByPk(req.params.id).then((result) => res.json(result));
  }

  function findCustomerByName(req: { query: { name: string }; }, res: { json: (arg0: Model<any, any>[]) => any; }) {
    const name = req.query.name;
    customerModel.findAll({ where: { name } }).then((result) => res.json(result));
  }

  function findCustomerByEmail(req: { query: { email: string; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    const email = req.query.email;
    customerModel.findOne({ where: { email }}).then((result) => res.json(result));
  }

  function findCustomerByPhone(req: { query: { phone: string; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    const phone = req.query.phone;
    customerModel.findOne({ where: { phone }}).then((result) => res.json(result));
  }
  
  function addCustomer(req: { body: { name: string; email: string; phone: string }; }, res: { json: (arg0: Model<any, any>) => any; }) {
    customerModel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }).then((result) => res.json(result));
  }
  
  async function updateCustomer(req: { body: { name: string; email: string; phone: string }; params: { id: Identifier | undefined; }; }, res: { json: (arg0: Model<any, any> | null) => any; }) {
    await customerModel.update(
      {
        name: req.body.name,
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
  
  async function deleteCustomer(req: { params: { id: Identifier; }; }, res: { json: (arg0: Model<any, any>[]) => any; }) {
    await customerModel.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    customerModel.findAll().then((result) => res.json(result));
  }
  
  export default { findAll, addCustomer, findCustomerByName, findCustomerByEmail, findCustomerByiD, findCustomerByPhone, updateCustomer, deleteCustomer };
