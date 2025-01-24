// src/routes/rolePermission.routes.ts
import { RolePermissionController } from '../controllers/roles_permission_controller';
import { Router } from 'express';

export const permission_route = Router()
const rolePermissionController = new RolePermissionController();

// Rotas para Roles
permission_route.post('/roles', (req, res) => rolePermissionController.createRole(req, res));
permission_route.get('/roles/:id', (req, res) => rolePermissionController.getRoleById(req, res));
permission_route.get('/roles', (req, res) => rolePermissionController.getAllRoles(req, res));
permission_route.put('/roles/:id', (req, res) => rolePermissionController.updateRole(req, res));
permission_route.delete('/roles/:id', (req, res) => rolePermissionController.deleteRole(req, res));

// Rotas para Permissions
permission_route.post('/permissions', (req, res) => rolePermissionController.createPermission(req, res));
permission_route.get('/permissions/:id', (req, res) => rolePermissionController.getPermissionById(req, res));
permission_route.get('/permissions', (req, res) => rolePermissionController.getAllPermissions(req, res));
permission_route.put('/permissions/:id', (req, res) => rolePermissionController.updatePermission(req, res));
permission_route.delete('/permissions/:id', (req, res) => rolePermissionController.deletePermission(req, res));

// Rotas para RolePermissions
permission_route.post('/role-permissions', (req, res) => rolePermissionController.addPermissionToRole(req, res));
permission_route.delete('/role-permissions', (req, res) => rolePermissionController.removePermissionFromRole(req, res));
permission_route.get('/roles/:roleId/permissions', (req, res) => rolePermissionController.getPermissionsByRoleId(req, res));
permission_route.get('/permissions/:permissionId/roles', (req, res) => rolePermissionController.getRolesByPermissionId(req, res));

