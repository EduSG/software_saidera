"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Fornecedores extends sequelize_1.Model {
}
Fornecedores.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    nome_fantasia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    razao_social: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    cnpj: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: "fornecedores",
    timestamps: false,
});
exports.default = Fornecedores;
