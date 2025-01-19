// src/models/vendedor.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { UsuarioTypes } from '../interfaces';

class Usuarios extends Model<UsuarioTypes> {
  public id!: number;
  public nome!: string;
  public id_gestor!: number
}

Usuarios.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_gestor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
  }
);

export default Usuarios;
