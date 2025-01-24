// src/sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database.sqlite', 
  logging: console.log
});

export default sequelize;
