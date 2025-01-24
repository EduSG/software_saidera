"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionService = void 0;
// src/services/rolePermission.service.ts
const roles_permission_repository_1 = require("../repositorys/roles_permission_repository");
class RolePermissionService {
    constructor() {
        this.rolePermissionRepository = new roles_permission_repository_1.RolePermissionRepository();
    }
    // Métodos para Roles
    async createRole(name) {
        return this.rolePermissionRepository.createRole(name);
    }
    async getRoleById(id) {
        return this.rolePermissionRepository.getRoleById(id);
    }
    async getAllRoles() {
        return this.rolePermissionRepository.getAllRoles();
    }
    async updateRole(id, name) {
        return this.rolePermissionRepository.updateRole(id, name);
    }
    async deleteRole(id) {
        return this.rolePermissionRepository.deleteRole(id);
    }
    // Métodos para Permissions
    async createPermission(name) {
        return this.rolePermissionRepository.createPermission(name);
    }
    async getPermissionById(id) {
        return this.rolePermissionRepository.getPermissionById(id);
    }
    async getAllPermissions() {
        return this.rolePermissionRepository.getAllPermissions();
    }
    async updatePermission(id, name) {
        return this.rolePermissionRepository.updatePermission(id, name);
    }
    async deletePermission(id) {
        return this.rolePermissionRepository.deletePermission(id);
    }
    // Métodos para RolePermissions
    async addPermissionToRole(roleId, permissionId) {
        return this.rolePermissionRepository.addPermissionToRole(roleId, permissionId);
    }
    async removePermissionFromRole(roleId, permissionId) {
        return this.rolePermissionRepository.removePermissionFromRole(roleId, permissionId);
    }
    async getPermissionsByRoleId(roleId) {
        return this.rolePermissionRepository.getPermissionsByRoleId(roleId);
    }
    async getRolesByPermissionId(permissionId) {
        return this.rolePermissionRepository.getRolesByPermissionId(permissionId);
    }
}
exports.RolePermissionService = RolePermissionService;
