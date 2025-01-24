// src/models/permissions.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Roles from './roles.model';

class Permissions extends Model {
  public id!: number;
  public name!: string;

  // Relacionamento com Roles
  public readonly Roles?: Roles[];
}

Permissions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize, // Passando a instância do Sequelize
    tableName: 'permissions',
    timestamps: false,
  }
);


export default Permissions;
