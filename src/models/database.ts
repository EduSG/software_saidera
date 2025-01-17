import { Sequelize } from 'sequelize-typescript';
import path from 'path';

// Configurando o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../../database.sqlite'),
  models: [path.join(__dirname, './*.model.ts')], // Caminho para os modelos
});

export default sequelize;

