// src/services/rolePermission.service.ts
import { RolePermissionRepository } from '../repositorys/roles_permission_repository';
import Roles from '../models/roles.model';
import Permissions from '../models/permissions.model';
import RolePermissions from '../models/role_permission.model';

export class RolePermissionService {
  private rolePermissionRepository: RolePermissionRepository;

  constructor() {
    this.rolePermissionRepository = new RolePermissionRepository();
  }

  // Métodos para Roles
  async createRole(name: string): Promise<Roles> {
    return this.rolePermissionRepository.createRole(name);
  }

  async getRoleById(id: number): Promise<Roles | null> {
    return this.rolePermissionRepository.getRoleById(id);
  }

  async getAllRoles(): Promise<Roles[]> {
    return this.rolePermissionRepository.getAllRoles();
  }

  async updateRole(id: number, name: string): Promise<Roles | null> {
    return this.rolePermissionRepository.updateRole(id, name);
  }

  async deleteRole(id: number): Promise<boolean> {
    return this.rolePermissionRepository.deleteRole(id);
  }

  // Métodos para Permissions
  async createPermission(name: string): Promise<Permissions> {
    return this.rolePermissionRepository.createPermission(name);
  }

  async getPermissionById(id: number): Promise<Permissions | null> {
    return this.rolePermissionRepository.getPermissionById(id);
  }

  async getAllPermissions(): Promise<Permissions[]> {
    return this.rolePermissionRepository.getAllPermissions();
  }

  async updatePermission(id: number, name: string): Promise<Permissions | null> {
    return this.rolePermissionRepository.updatePermission(id, name);
  }

  async deletePermission(id: number): Promise<boolean> {
    return this.rolePermissionRepository.deletePermission(id);
  }

  // Métodos para RolePermissions
  async addPermissionToRole(roleId: number, permissionId: number): Promise<RolePermissions> {
    return this.rolePermissionRepository.addPermissionToRole(roleId, permissionId);
  }

  async removePermissionFromRole(roleId: number, permissionId: number): Promise<boolean> {
    return this.rolePermissionRepository.removePermissionFromRole(roleId, permissionId);
  }

  async getPermissionsByRoleId(roleId: number): Promise<Permissions[]> {
    return this.rolePermissionRepository.getPermissionsByRoleId(roleId);
  }

  async getRolesByPermissionId(permissionId: number): Promise<Roles[]> {
    return this.rolePermissionRepository.getRolesByPermissionId(permissionId);
  }
}
