"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const usuario_model_1 = __importDefault(require("./usuario.model"));
class Clientes extends sequelize_1.Model {
}
Clientes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    nome_fantasia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    razao_social: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    subcategoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    cnpj: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    id_vendedor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: "clientes",
    timestamps: false,
});
Clientes.belongsTo(usuario_model_1.default, { foreignKey: 'id_vendedor', targetKey: 'id' });
exports.default = Clientes;
