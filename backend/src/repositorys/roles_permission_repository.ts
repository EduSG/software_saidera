import Roles from '../models/roles.model';
import Permissions from '../models/permissions.model';
import RolePermissions from '../models/role_permission.model';

export class RolePermissionRepository {
  // Métodos para Roles
  public async createRole(name: string): Promise<Roles> {
    try {
      const role = await Roles.create({ name });
      return role;
    } catch (error) {
      throw new Error('Não foi possível criar a role.');
    }
  }

  public async getRoleById(id: number): Promise<Roles | null> {
    try {
      const role = await Roles.findByPk(id, {
        include: [{ model: Permissions, as: 'Permissions' }], // Inclui as permissões associadas
      });
      return role;
    } catch (error) {
      throw new Error('Não foi possível buscar a role.');
    }
  }

  public async getAllRoles(): Promise<Roles[]> {
    try {
      const roles = await Roles.findAll({
        include: [{ model: Permissions, as: 'Permissions' }], // Inclui as permissões associadas
      });
      return roles;
    } catch (error) {
      throw new Error('Não foi possível buscar as roles.');
    }
  }

  public async updateRole(id: number, name: string): Promise<Roles | null> {
    try {
      const [affectedRows] = await Roles.update({ name }, { where: { id } });
      if (affectedRows > 0) return await Roles.findByPk(id);
      return null;
    } catch (error) {
      throw new Error('Não foi possível atualizar a role.');
    }
  }

  public async deleteRole(id: number): Promise<boolean> {
    try {
      const affectedRows = await Roles.destroy({ where: { id } });
      return affectedRows > 0;
    } catch (error) {
      throw new Error('Não foi possível deletar a role.');
    }
  }

  // Métodos para Permissions
  public async createPermission(name: string): Promise<Permissions> {
    try {
      const permission = await Permissions.create({ name });
      return permission;
    } catch (error) {
      throw new Error('Não foi possível criar a permissão.');
    }
  }

  public async getPermissionById(id: number): Promise<Permissions | null> {
    try {
      const permission = await Permissions.findByPk(id, {
        include: [{ model: Roles, as: 'Roles' }], // Inclui as roles associadas
      });
      return permission;
    } catch (error) {
      throw new Error('Não foi possível buscar a permissão.');
    }
  }

  public async getAllPermissions(): Promise<Permissions[]> {
    try {
      const permissions = await Permissions.findAll({
        include: [{ model: Roles, as: 'Roles' }], // Inclui as roles associadas
      });
      return permissions;
    } catch (error) {
      throw new Error('Não foi possível buscar as permissões.');
    }
  }

  public async updatePermission(id: number, name: string): Promise<Permissions | null> {
    try {
      const [affectedRows] = await Permissions.update({ name }, { where: { id } });
      if (affectedRows > 0) return await Permissions.findByPk(id);
      return null;
    } catch (error) {
      throw new Error('Não foi possível atualizar a permissão.');
    }
  }

  public async deletePermission(id: number): Promise<boolean> {
    try {
      const affectedRows = await Permissions.destroy({ where: { id } });
      return affectedRows > 0;
    } catch (error) {
      throw new Error('Não foi possível deletar a permissão.');
    }
  }

  // Métodos para RolePermissions (relacionamento entre Roles e Permissions)
  public async addPermissionToRole(roleId: number, permissionId: number): Promise<RolePermissions> {
    try {
      const rolePermission = await RolePermissions.create({ role_id: roleId, permission_id: permissionId });
      return rolePermission;
    } catch (error) {
      throw new Error('Não foi possível associar a permissão à role.');
    }
  }

  public async removePermissionFromRole(roleId: number, permissionId: number): Promise<boolean> {
    try {
      const affectedRows = await RolePermissions.destroy({
        where: {
          role_id: roleId,
          permission_id: permissionId,
        },
      });
      return affectedRows > 0;
    } catch (error) {
      throw new Error('Não foi possível remover a permissão da role.');
    }
  }

  public async getPermissionsByRoleId(roleId: number): Promise<Permissions[]> {
    try {
      const role = await Roles.findByPk(roleId, {
        include: [{ model: Permissions, as: 'Permissions' }], // Inclui as permissões associadas
      });
      return role?.Permissions || []; // Retorna um array vazio se Permissions for undefined
    } catch (error) {
      throw new Error('Não foi possível buscar as permissões da role.');
    }
  }

  public async getRolesByPermissionId(permissionId: number): Promise<Roles[]> {
    try {
      const permission = await Permissions.findByPk(permissionId, {
        include: [{ model: Roles, as: 'Roles' }], // Inclui as roles associadas
      });
      return permission?.Roles || []; // Retorna um array vazio se Roles for undefined
    } catch (error) {
      throw new Error('Não foi possível buscar as roles da permissão.');
    }
  }
}
