"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/sequelize.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Caminho para o banco de dados SQLite
});
exports.default = sequelize;
