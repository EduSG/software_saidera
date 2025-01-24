"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/sequelize.ts
const sequelize_1 = require("sequelize");
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const roles_model_1 = __importDefault(require("../models/roles.model"));
const permissions_model_1 = __importDefault(require("../models/permissions.model"));
const role_permission_model_1 = __importDefault(require("../models/role_permission.model"));
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './src/database.sqlite',
    logging: console.log
});
usuario_model_1.default.belongsTo(roles_model_1.default, { foreignKey: 'role_id' });
roles_model_1.default.hasMany(usuario_model_1.default, { foreignKey: 'role_id' });
roles_model_1.default.belongsToMany(permissions_model_1.default, { through: role_permission_model_1.default, foreignKey: 'role_id' });
permissions_model_1.default.belongsToMany(roles_model_1.default, { through: role_permission_model_1.default, foreignKey: 'permission_id' });
exports.default = sequelize;
