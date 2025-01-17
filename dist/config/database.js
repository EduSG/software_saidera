"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const path_1 = __importDefault(require("path"));
// Configurando o banco de dados SQLite
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: path_1.default.join(__dirname, '../../database.sqlite'),
    models: [path_1.default.join(__dirname, './*.model.ts')], // Caminho para os modelos
});
exports.default = sequelize;
