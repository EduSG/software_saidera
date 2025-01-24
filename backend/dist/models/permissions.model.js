"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/permissions.model.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const roles_model_1 = __importDefault(require("./roles.model"));
class Permissions extends sequelize_1.Model {
}
Permissions.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: database_1.default,
    tableName: 'permissions',
    timestamps: false,
});
Permissions.belongsToMany(roles_model_1.default, {
    through: 'role_permissions',
    foreignKey: 'permission_id',
    otherKey: 'role_id',
    as: 'Roles',
});
exports.default = Permissions;
