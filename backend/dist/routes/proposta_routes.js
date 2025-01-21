"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaRoutes = void 0;
const controller_proposta_1 = require("../controllers/controller_proposta");
const PropostaRoutes = async (app) => {
    app.post('/propostas_lotes', controller_proposta_1.PropostaController.adicionaPropostaLote);
    app.get('/propostas', controller_proposta_1.PropostaController.buscaTodasPropostas);
};
exports.PropostaRoutes = PropostaRoutes;
