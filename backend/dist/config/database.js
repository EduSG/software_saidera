"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/sequelize.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './src/database.sqlite',
    logging: console.log
});
exports.default = sequelize;
