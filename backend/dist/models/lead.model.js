"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const usuario_model_1 = __importDefault(require("./usuario.model"));
const cliente_model_1 = __importDefault(require("./cliente.model"));
const fornecedor_model_1 = __importDefault(require("./fornecedor.model"));
class Lead extends sequelize_1.Model {
}
Lead.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: true,
    },
    data_lead: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    empresa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    origem: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    id_fornecedor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    produtos_lead: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: 'leads',
    timestamps: false,
});
// Relacionamentos
Lead.belongsTo(usuario_model_1.default, { foreignKey: 'id_usuario', targetKey: 'id' });
Lead.belongsTo(cliente_model_1.default, { foreignKey: 'id_cliente', targetKey: 'id' });
Lead.belongsTo(fornecedor_model_1.default, { foreignKey: 'id_fornecedor', targetKey: 'id' });
exports.default = Lead;
