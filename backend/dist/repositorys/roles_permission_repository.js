"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionRepository = void 0;
const roles_model_1 = __importDefault(require("../models/roles.model"));
const permissions_model_1 = __importDefault(require("../models/permissions.model"));
const role_permission_model_1 = __importDefault(require("../models/role_permission.model"));
class RolePermissionRepository {
    // Métodos para Roles
    async createRole(name) {
        try {
            const role = await roles_model_1.default.create({ name });
            return role;
        }
        catch (error) {
            throw new Error('Não foi possível criar a role.');
        }
    }
    async getRoleById(id) {
        try {
            const role = await roles_model_1.default.findByPk(id, {
                include: [{ model: permissions_model_1.default, as: 'Permissions' }], // Inclui as permissões associadas
            });
            return role;
        }
        catch (error) {
            throw new Error('Não foi possível buscar a role.');
        }
    }
    async getAllRoles() {
        try {
            const roles = await roles_model_1.default.findAll({
                include: [{ model: permissions_model_1.default, as: 'Permissions' }], // Inclui as permissões associadas
            });
            return roles;
        }
        catch (error) {
            throw new Error('Não foi possível buscar as roles.');
        }
    }
    async updateRole(id, name) {
        try {
            const [affectedRows] = await roles_model_1.default.update({ name }, { where: { id } });
            if (affectedRows > 0)
                return await roles_model_1.default.findByPk(id);
            return null;
        }
        catch (error) {
            throw new Error('Não foi possível atualizar a role.');
        }
    }
    async deleteRole(id) {
        try {
            const affectedRows = await roles_model_1.default.destroy({ where: { id } });
            return affectedRows > 0;
        }
        catch (error) {
            throw new Error('Não foi possível deletar a role.');
        }
    }
    // Métodos para Permissions
    async createPermission(name) {
        try {
            const permission = await permissions_model_1.default.create({ name });
            return permission;
        }
        catch (error) {
            throw new Error('Não foi possível criar a permissão.');
        }
    }
    async getPermissionById(id) {
        try {
            const permission = await permissions_model_1.default.findByPk(id, {
                include: [{ model: roles_model_1.default, as: 'Roles' }], // Inclui as roles associadas
            });
            return permission;
        }
        catch (error) {
            throw new Error('Não foi possível buscar a permissão.');
        }
    }
    async getAllPermissions() {
        try {
            const permissions = await permissions_model_1.default.findAll({
                include: [{ model: roles_model_1.default, as: 'Roles' }], // Inclui as roles associadas
            });
            return permissions;
        }
        catch (error) {
            throw new Error('Não foi possível buscar as permissões.');
        }
    }
    async updatePermission(id, name) {
        try {
            const [affectedRows] = await permissions_model_1.default.update({ name }, { where: { id } });
            if (affectedRows > 0)
                return await permissions_model_1.default.findByPk(id);
            return null;
        }
        catch (error) {
            throw new Error('Não foi possível atualizar a permissão.');
        }
    }
    async deletePermission(id) {
        try {
            const affectedRows = await permissions_model_1.default.destroy({ where: { id } });
            return affectedRows > 0;
        }
        catch (error) {
            throw new Error('Não foi possível deletar a permissão.');
        }
    }
    // Métodos para RolePermissions (relacionamento entre Roles e Permissions)
    async addPermissionToRole(roleId, permissionId) {
        try {
            const rolePermission = await role_permission_model_1.default.create({ role_id: roleId, permission_id: permissionId });
            return rolePermission;
        }
        catch (error) {
            throw new Error('Não foi possível associar a permissão à role.');
        }
    }
    async removePermissionFromRole(roleId, permissionId) {
        try {
            const affectedRows = await role_permission_model_1.default.destroy({
                where: {
                    role_id: roleId,
                    permission_id: permissionId,
                },
            });
            return affectedRows > 0;
        }
        catch (error) {
            throw new Error('Não foi possível remover a permissão da role.');
        }
    }
    async getPermissionsByRoleId(roleId) {
        try {
            const role = await roles_model_1.default.findByPk(roleId, {
                include: [{ model: permissions_model_1.default, as: 'Permissions' }], // Inclui as permissões associadas
            });
            return (role === null || role === void 0 ? void 0 : role.Permissions) || []; // Retorna um array vazio se Permissions for undefined
        }
        catch (error) {
            throw new Error('Não foi possível buscar as permissões da role.');
        }
    }
    async getRolesByPermissionId(permissionId) {
        try {
            const permission = await permissions_model_1.default.findByPk(permissionId, {
                include: [{ model: roles_model_1.default, as: 'Roles' }], // Inclui as roles associadas
            });
            return (permission === null || permission === void 0 ? void 0 : permission.Roles) || []; // Retorna um array vazio se Roles for undefined
        }
        catch (error) {
            throw new Error('Não foi possível buscar as roles da permissão.');
        }
    }
}
exports.RolePermissionRepository = RolePermissionRepository;
