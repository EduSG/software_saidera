"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permission_route = void 0;
// src/routes/rolePermission.routes.ts
const roles_permission_controller_1 = require("../controllers/roles_permission_controller");
const express_1 = require("express");
exports.permission_route = (0, express_1.Router)();
const rolePermissionController = new roles_permission_controller_1.RolePermissionController();
// Rotas para Roles
exports.permission_route.post('/roles', (req, res) => rolePermissionController.createRole(req, res));
exports.permission_route.get('/roles/:id', (req, res) => rolePermissionController.getRoleById(req, res));
exports.permission_route.get('/roles', (req, res) => rolePermissionController.getAllRoles(req, res));
exports.permission_route.put('/roles/:id', (req, res) => rolePermissionController.updateRole(req, res));
exports.permission_route.delete('/roles/:id', (req, res) => rolePermissionController.deleteRole(req, res));
// Rotas para Permissions
exports.permission_route.post('/permissions', (req, res) => rolePermissionController.createPermission(req, res));
exports.permission_route.get('/permissions/:id', (req, res) => rolePermissionController.getPermissionById(req, res));
exports.permission_route.get('/permissions', (req, res) => rolePermissionController.getAllPermissions(req, res));
exports.permission_route.put('/permissions/:id', (req, res) => rolePermissionController.updatePermission(req, res));
exports.permission_route.delete('/permissions/:id', (req, res) => rolePermissionController.deletePermission(req, res));
// Rotas para RolePermissions
exports.permission_route.post('/role-permissions', (req, res) => rolePermissionController.addPermissionToRole(req, res));
exports.permission_route.delete('/role-permissions', (req, res) => rolePermissionController.removePermissionFromRole(req, res));
exports.permission_route.get('/roles/:roleId/permissions', (req, res) => rolePermissionController.getPermissionsByRoleId(req, res));
exports.permission_route.get('/permissions/:permissionId/roles', (req, res) => rolePermissionController.getRolesByPermissionId(req, res));
