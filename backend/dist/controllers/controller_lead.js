"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadController = void 0;
const lead_service_1 = require("../services/lead_service");
class LeadController {
    static async adicionaLeadLote(req, reply) {
        const dados = req.body;
        console.log(dados);
        try {
            const propostas_lotes = await lead_service_1.LeadService.createLote(dados);
            reply.status(200).send(propostas_lotes);
        }
        catch (error) {
            reply.status(400).send({ error: error });
        }
    }
    static async buscaTodasLeads(req, reply) {
        const users = await lead_service_1.LeadService.getLeads();
        reply.send(users);
    }
}
exports.LeadController = LeadController;
