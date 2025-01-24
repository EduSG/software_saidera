// src/models/permissions.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Roles from './roles.model';

class Permissions extends Model {
  public id!: number;
  public name!: string;

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
    sequelize,
    tableName: 'permissions',
    timestamps: false,
  }
);

Permissions.belongsToMany(Roles, {
  through: 'role_permissions',
  foreignKey: 'permission_id',
  otherKey: 'role_id',
  as: 'Roles', 
});

export default Permissions;
