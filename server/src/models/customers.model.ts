import { DataTypes } from "sequelize";
import sequelize from "../db/db";

const Customer = sequelize.define("customer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  coordinateX: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  coordinateY: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Customer;