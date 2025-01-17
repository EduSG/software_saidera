"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Proposta extends sequelize_1.Model {
}
// Definição do modelo
Proposta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.default, // Passando a instância do Sequelize para o método init
    modelName: 'Proposta',
    tableName: 'propostas',
    timestamps: true,
});
exports.default = Proposta;
