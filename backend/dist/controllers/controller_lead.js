"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadController = void 0;
const lead_service_1 = require("../services/lead_service");
class LeadController {
    static async adicionaLeadLote(req, res) {
        // No Express, o corpo da requisição está em req.body
        const dados = req.body;
        console.log(dados); // Log dos dados recebidos
        try {
            const propostas_lotes = await lead_service_1.LeadService.createLote(dados);
            res.status(200).send(propostas_lotes); // Use res.status().send() para enviar a resposta
        }
        catch (error) {
            res.status(400).send({ error: error.message }); // Envie o erro como resposta
        }
    }
    static async buscaTodasLeads(req, res) {
        try {
            const leads = await lead_service_1.LeadService.getLeads();
            res.status(200).send(leads); // Envie as leads como resposta
        }
        catch (error) {
            res.status(500).send({ error: error.message }); // Trate erros internos do servidor
        }
    }
}
exports.LeadController = LeadController;
