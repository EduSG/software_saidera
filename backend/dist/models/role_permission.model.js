"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/role_permissions.model.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class RolePermissions extends sequelize_1.Model {
}
RolePermissions.init({
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'roles',
            key: 'id',
        },
    },
    permission_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'permissions',
            key: 'id',
        },
    },
}, {
    sequelize: database_1.default, // Passando a instância do Sequelize
    tableName: 'role_permissions',
    timestamps: false,
});
exports.default = RolePermissions;
