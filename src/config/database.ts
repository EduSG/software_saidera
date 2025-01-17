// src/sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Caminho para o banco de dados SQLite
});

export default sequelize;
