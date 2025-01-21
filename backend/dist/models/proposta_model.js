"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init_proposta_model = exports.Proposta = void 0;
const sequelize_1 = require("sequelize");
class Proposta extends sequelize_1.Model {
}
exports.Proposta = Proposta;
const init_proposta_model = (sequelize) => {
    Proposta.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        categoria: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Proposta',
        tableName: 'propostas',
        timestamps: true,
    });
};
exports.init_proposta_model = init_proposta_model;
