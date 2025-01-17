"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaController = void 0;
const proposta_service_1 = require("../services/proposta_service");
class PropostaController {
    static async adicionaPropostaIndividual(req, reply) {
        const { id, categoria } = req.body;
        console.log(id, categoria);
        try {
            const user = await proposta_service_1.PropostaService.createUser(id, categoria);
            reply.status(201).send(user);
        }
        catch (error) {
            reply.status(400).send({ error: error.message });
        }
    }
    static async buscaTodasPropostas(req, reply) {
        const users = await proposta_service_1.PropostaService.getAllUsers();
        reply.send(users);
    }
}
exports.PropostaController = PropostaController;
