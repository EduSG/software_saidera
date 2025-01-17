"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaRoutes = void 0;
const controller_proposta_1 = require("../controllers/controller_proposta");
const PropostaRoutes = async (app) => {
    app.post('/proposta_indidual', controller_proposta_1.PropostaController.adicionaPropostaIndividual);
    app.get('/propostas', controller_proposta_1.PropostaController.adicionaPropostaIndividual);
};
exports.PropostaRoutes = PropostaRoutes;
