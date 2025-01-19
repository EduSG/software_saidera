"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRoutes = void 0;
const controller_usuario_1 = require("../controllers/controller_usuario");
const controller_proposta_1 = require("../controllers/controller_proposta");
const AllRoutes = async (app) => {
    app.post('/propostas_lotes', controller_proposta_1.PropostaController.adicionaPropostaLote);
    app.get('/propostas', controller_proposta_1.PropostaController.buscaTodasPropostas);
    app.post('/usuarios_lotes', controller_usuario_1.UsuarioController.adicionaUsuarioLote);
    app.get('/usuarios', controller_usuario_1.UsuarioController.buscaTodasPropostas);
};
exports.AllRoutes = AllRoutes;
