// src/models/associations.ts
import Roles from './roles.model';
import Permissions from './permissions.model';
import RolePermissions from './role_permission.model';

export default function defineAssociations() {
  // Relacionamento entre Roles e Permissions
  Roles.belongsToMany(Permissions, {
    through: RolePermissions,
    foreignKey: 'role_id',
    otherKey: 'permission_id',
    as: 'Permissions',
  });

  Permissions.belongsToMany(Roles, {
    through: RolePermissions,
    foreignKey: 'permission_id',
    otherKey: 'role_id',
    as: 'Roles',
  });
}
