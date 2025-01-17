import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';

class Proposta extends Model {
  public id!: number;
  public categoria!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Definição do modelo
Proposta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize, // Passando a instância do Sequelize para o método init
    modelName: 'Proposta',
    tableName: 'propostas',
    timestamps: true,
  }
);

export default Proposta;
