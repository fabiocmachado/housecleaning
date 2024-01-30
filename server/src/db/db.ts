import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize('housecleaning', 'postgres', process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect:"postgres"
});

export default sequelize;