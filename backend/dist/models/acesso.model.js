"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/usuarios.model.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Acesso extends sequelize_1.Model {
}
Acesso.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles', // Nome da tabela de roles
            key: 'id',
        },
    },
}, {
    sequelize: database_1.default,
    tableName: 'acessos',
    timestamps: false,
});
exports.default = Acesso;
