import Sequelize from "sequelize";
import sequelize from "../db/db";

const Customer = sequelize.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  coordinateX: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  coordinateY: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

export default Customer;
