"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = defineAssociations;
// src/models/associations.ts
const roles_model_1 = __importDefault(require("./roles.model"));
const permissions_model_1 = __importDefault(require("./permissions.model"));
const role_permission_model_1 = __importDefault(require("./role_permission.model"));
function defineAssociations() {
    // Relacionamento entre Roles e Permissions
    roles_model_1.default.belongsToMany(permissions_model_1.default, {
        through: role_permission_model_1.default,
        foreignKey: 'role_id',
        otherKey: 'permission_id',
        as: 'Permissions',
    });
    permissions_model_1.default.belongsToMany(roles_model_1.default, {
        through: role_permission_model_1.default,
        foreignKey: 'permission_id',
        otherKey: 'role_id',
        as: 'Roles',
    });
}
