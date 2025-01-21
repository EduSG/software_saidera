"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaRoutes = void 0;
const controller_usuario_1 = require("../controllers/controller_usuario");
const PropostaRoutes = async (app) => {
    app.post('/usuarios_lotes', controller_usuario_1.UsuarioController.adicionaUsuarioLote);
    app.get('/usuarios', controller_usuario_1.UsuarioController.buscaTodasPropostas);
};
exports.PropostaRoutes = PropostaRoutes;
