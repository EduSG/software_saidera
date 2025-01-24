// src/models/usuarios.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { UsuarioTypes } from '../interfaces';

class Usuarios extends Model<UsuarioTypes> {
  public id!: number;
  public nome!: string;
  public id_gestor!: number;
  public role_id!: number; 
}

Usuarios.init(
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
    id_gestor: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    tableName: 'usuarios',
    timestamps: false,
  }
);

export default Usuarios;
