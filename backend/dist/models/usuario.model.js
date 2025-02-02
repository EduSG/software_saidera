"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/usuarios.model.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Usuarios extends sequelize_1.Model {
}
Usuarios.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    id_gestor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: 'usuarios',
    timestamps: false,
});
exports.default = Usuarios;
