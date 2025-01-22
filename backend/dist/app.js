"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const database_1 = __importDefault(require("./config/database"));
const all_routes_1 = require("./routes/all_routes");
// Criar a instância do Fastify com limite de payload ajustado
const app = (0, fastify_1.default)({
    bodyLimit: 200 * 1024 * 1024, // 200 MB em bytes
});
app.register(all_routes_1.AllRoutes);
const start = async () => {
    try {
        await database_1.default.sync({ force: false });
        console.log('Banco de dados sincronizado');
        await app.listen({ port: 3870 });
        console.log('Servidor rodando em http://localhost:3870');
    }
    catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
};
start();
