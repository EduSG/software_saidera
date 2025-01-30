
// src/models/usuarios.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { AcessoTypes } from '../interfaces';
import { AllowNull } from 'sequelize-typescript';

class Acesso extends Model<AcessoTypes> {
  public id!: number;
  public nome!: string;
  public email!: string;
  public senha!: string;
  public id_filemaker!: number;
  public role_id!: number; 
}

Acesso.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_filemaker: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles', // Nome da tabela de roles
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'acessos',
    timestamps: false,
  }
);

export default Acesso;
