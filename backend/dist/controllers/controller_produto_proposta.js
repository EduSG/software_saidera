"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPropostaController = void 0;
const produto_proposta_1 = require("../services/produto_proposta");
class ProdutoPropostaController {
    static async adicionarProdutoPropostaLote(req, res) {
        const dados = req.body;
        try {
            const produto_proposta_repo = await produto_proposta_1.ProdutosPropostaService.createLote(dados);
            res.status(200).send(produto_proposta_repo);
        }
        catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static async getProdutoProposta(req, res) {
        try {
            const produto_proposta_repo = await produto_proposta_1.ProdutosPropostaService.getProdutosProposta();
            console.log(produto_proposta_repo);
            res.status(200).send(produto_proposta_repo);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}
exports.ProdutoPropostaController = ProdutoPropostaController;
