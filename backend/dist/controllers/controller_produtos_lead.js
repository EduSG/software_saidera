"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoLeadController = void 0;
const produto_lead_service_1 = require("../services/produto_lead_service");
class ProdutoLeadController {
    static async adicionarProdutoLeadLote(req, res) {
        const dados = req.body;
        try {
            const produto_lead_lotes = await produto_lead_service_1.ProdutosLeadService.createLote(dados);
            res.status(200).send(produto_lead_lotes);
        }
        catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static async getProdutoLead(req, res) {
        try {
            const produto_lead_lotes = await produto_lead_service_1.ProdutosLeadService.getProdutosLead();
            console.log(produto_lead_lotes);
            res.status(200).send(produto_lead_lotes);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}
exports.ProdutoLeadController = ProdutoLeadController;
