"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/roles.model.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const permissions_model_1 = __importDefault(require("./permissions.model"));
class Roles extends sequelize_1.Model {
}
Roles.init({
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
    tableName: 'roles',
    timestamps: false,
});
// Definindo o relacionamento
Roles.belongsToMany(permissions_model_1.default, {
    through: 'role_permissions',
    foreignKey: 'role_id',
    otherKey: 'permission_id',
    as: 'Permissions',
});
exports.default = Roles;
