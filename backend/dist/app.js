"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const all_routes_1 = require("./routes/all_routes");
// Criar a instância do Express
const app = (0, express_1.default)();
// Configurar o limite de payload para 200 MB
app.use(express_1.default.json({ limit: '200mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '200mb' }));
// Registrar as rotas
app.use(all_routes_1.AllRoutes);
// Função para iniciar o servidor
const start = async () => {
    try {
        // Sincronizar o banco de dados
        // await sequelize.sync({ force: false });
        console.log('Banco de dados sincronizado');
        // Iniciar o servidor na porta 3870
        app.listen(3870, '0.0.0.0', () => {
            console.log('Servidor rodando em http://0.0.0.0:3870');
        });
    }
    catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
};
// Iniciar a aplicação
start();
