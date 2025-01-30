"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auto_controller_1 = require("../utils/auto_controller");
// Cria uma instância do Router do Express
exports.AuthRoutes = (0, express_1.Router)();
// Rotas para Proposta
exports.AuthRoutes.post('/login', auto_controller_1.AuthController.Auth_Check);
exports.AuthRoutes.get('/login/:token', auto_controller_1.AuthController.Decode);
