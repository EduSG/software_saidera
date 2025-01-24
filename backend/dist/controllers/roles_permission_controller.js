"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionController = void 0;
const roles_permission_service_1 = require("../services/roles_permission_service");
class RolePermissionController {
    constructor() {
        this.rolePermissionService = new roles_permission_service_1.RolePermissionService();
    }
    // Métodos para Roles
    async createRole(req, res) {
        try {
            const { name } = req.body;
            const role = await this.rolePermissionService.createRole(name);
            res.status(201).json(role);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao criar role.' });
        }
    }
    async getRoleById(req, res) {
        try {
            const { id } = req.params;
            const role = await this.rolePermissionService.getRoleById(Number(id));
            if (role) {
                res.status(200).json(role);
            }
            else {
                res.status(404).json({ error: 'Role não encontrada.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar role.' });
        }
    }
    async getAllRoles(req, res) {
        try {
            const roles = await this.rolePermissionService.getAllRoles();
            res.status(200).json(roles);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar roles.' });
        }
    }
    async updateRole(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const role = await this.rolePermissionService.updateRole(Number(id), name);
            if (role) {
                res.status(200).json(role);
            }
            else {
                res.status(404).json({ error: 'Role não encontrada.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar role.' });
        }
    }
    async deleteRole(req, res) {
        try {
            const { id } = req.params;
            const success = await this.rolePermissionService.deleteRole(Number(id));
            if (success) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'Role não encontrada.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao deletar role.' });
        }
    }
    // Métodos para Permissions
    async createPermission(req, res) {
        try {
            const { name } = req.body;
            const permission = await this.rolePermissionService.createPermission(name);
            res.status(201).json(permission);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao criar permissão.' });
        }
    }
    async getPermissionById(req, res) {
        try {
            const { id } = req.params;
            const permission = await this.rolePermissionService.getPermissionById(Number(id));
            if (permission) {
                res.status(200).json(permission);
            }
            else {
                res.status(404).json({ error: 'Permissão não encontrada.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar permissão.' });
        }
    }
    async getAllPermissions(req, res) {
        try {
            const permissions = await this.rolePermissionService.getAllPermissions();
            res.status(200).json(permissions);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar permissões.' });
        }
    }
    async updatePermission(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const permission = await this.rolePermissionService.updatePermission(Number(id), name);
            if (permission) {
                res.status(200).json(permission);
            }
            else {
                res.status(404).json({ error: 'Permissão não encontrada.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar permissão.' });
        }
    }
    async deletePermission(req, res) {
        try {
            const { id } = req.params;
            const success = await this.rolePermissionService.deletePermission(Number(id));
            if (success) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'Permissão não encontrada.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao deletar permissão.' });
        }
    }
    // Métodos para RolePermissions
    async addPermissionToRole(req, res) {
        try {
            const { roleId, permissionId } = req.body;
            const rolePermission = await this.rolePermissionService.addPermissionToRole(roleId, permissionId);
            res.status(201).json(rolePermission);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao associar permissão à role.' });
        }
    }
    async removePermissionFromRole(req, res) {
        try {
            const { roleId, permissionId } = req.body;
            const success = await this.rolePermissionService.removePermissionFromRole(roleId, permissionId);
            if (success) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'Associação não encontrada.' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao remover permissão da role.' });
        }
    }
    async getPermissionsByRoleId(req, res) {
        try {
            const { roleId } = req.params;
            const permissions = await this.rolePermissionService.getPermissionsByRoleId(Number(roleId));
            res.status(200).json(permissions);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar permissões da role.' });
        }
    }
    async getRolesByPermissionId(req, res) {
        try {
            const { permissionId } = req.params;
            const roles = await this.rolePermissionService.getRolesByPermissionId(Number(permissionId));
            res.status(200).json(roles);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao buscar roles da permissão.' });
        }
    }
}
exports.RolePermissionController = RolePermissionController;
