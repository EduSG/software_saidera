// src/models/roles.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Permissions from './permissions.model';

class Roles extends Model {
  public id!: number;
  public name!: string;

  // Relacionamento com Permissions
  public readonly Permissions?: Permissions[];
}

Roles.init(
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
    sequelize,
    tableName: 'roles',
    timestamps: false,
  }
);

// Definindo o relacionamento
Roles.belongsToMany(Permissions, {
  through: 'role_permissions',
  foreignKey: 'role_id',
  otherKey: 'permission_id',
  as: 'Permissions', 
});

export default Roles;
