// src/models/role_permissions.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class RolePermissions extends Model {
  public role_id!: number;
  public permission_id!: number;
}

RolePermissions.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    permission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'permissions',
        key: 'id',
      },
    },
  },
  {
    sequelize, // Passando a instância do Sequelize
    tableName: 'role_permissions',
    timestamps: false,
  }
);

export default RolePermissions;
