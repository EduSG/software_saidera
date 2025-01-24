"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaController = void 0;
const proposta_service_1 = require("../services/proposta_service");
class PropostaController {
    static async adicionaPropostaLote(req, res) {
        // No Express, o corpo da requisição está em req.body
        const dados = req.body;
        console.log(dados); // Log dos dados recebidos
        try {
            const propostas_lotes = await proposta_service_1.PropostaService.createLote(dados);
            res.status(200).send(propostas_lotes); // Use res.status().send() para enviar a resposta
        }
        catch (error) {
            res.status(400).send({ error: error.message }); // Envie o erro como resposta
        }
    }
    static async buscaTodasPropostas(req, res) {
        try {
            const propostas = await proposta_service_1.PropostaService.getPropostas();
            res.status(200).send(propostas); // Envie as propostas como resposta
        }
        catch (error) {
            res.status(500).send({ error: error.message }); // Trate erros internos do servidor
        }
    }
}
exports.PropostaController = PropostaController;
