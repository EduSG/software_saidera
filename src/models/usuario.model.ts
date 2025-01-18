// src/models/vendedor.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Usuarios extends Model {
  public id!: number;
  public nome!: string;
}

Usuarios.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
  }
);

export default Usuarios;
