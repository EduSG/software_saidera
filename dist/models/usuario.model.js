"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/vendedor.model.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Usuarios extends sequelize_1.Model {
}
Usuarios.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'usuarios',
    timestamps: false,
});
exports.default = Usuarios;
