// src/sequelize.ts
import { Sequelize } from 'sequelize';
import Usuarios from '../models/usuario.model';
import Roles from '../models/roles.model';
import Permissions from '../models/permissions.model';
import RolePermissions from '../models/role_permission.model';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database.sqlite', 
  logging: console.log
});

Usuarios.belongsTo(Roles, { foreignKey: 'role_id' });
Roles.hasMany(Usuarios, { foreignKey: 'role_id' });

Roles.belongsToMany(Permissions, { through: RolePermissions, foreignKey: 'role_id' });
Permissions.belongsToMany(Roles, { through: RolePermissions, foreignKey: 'permission_id' });

export default sequelize;
