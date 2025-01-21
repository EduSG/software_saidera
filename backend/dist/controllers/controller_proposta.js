"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaController = void 0;
const proposta_service_1 = require("../services/proposta_service");
class PropostaController {
    static async adicionaPropostaLote(req, reply) {
        const dados = req.body;
        console.log(dados);
        try {
            const propostas_lotes = await proposta_service_1.PropostaService.createLote(dados);
            reply.status(200).send(propostas_lotes);
        }
        catch (error) {
            reply.status(400).send({ error: error });
        }
    }
    static async buscaTodasPropostas(req, reply) {
        const users = await proposta_service_1.PropostaService.getPropostas();
        reply.send(users);
    }
}
exports.PropostaController = PropostaController;
