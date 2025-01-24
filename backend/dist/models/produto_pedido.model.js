"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const pedido_model_1 = __importDefault(require("./pedido.model"));
class ProdutoPedido extends sequelize_1.Model {
}
ProdutoPedido.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: true,
    },
    data_pedido: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    empresa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    id_pedido: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    id_vendedor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    id_fornecedor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    valor_total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    valor_unitario: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    quantidade: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: 'produto_pedido',
    timestamps: false,
});
// Relacionamentos
ProdutoPedido.belongsTo(pedido_model_1.default, { foreignKey: 'id_pedido', targetKey: 'id' });
exports.default = ProdutoPedido;
