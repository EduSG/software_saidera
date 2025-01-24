"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorController = void 0;
const fornecedor_service_1 = require("../services/fornecedor_service");
class FornecedorController {
    static async adicionaFornecedorLote(req, res) {
        // No Express, o corpo da requisição está em req.body
        const dados = req.body;
        try {
            const fornecedor_lotes = await fornecedor_service_1.FornecedorService.createLote(dados);
            res.status(200).send(fornecedor_lotes); // Use res.status().send() para enviar a resposta
        }
        catch (error) {
            res.status(400).send({ error: error.message }); // Envie o erro como resposta
        }
    }
    static async getFornecedores(req, res) {
        try {
            const fornecedores = await fornecedor_service_1.FornecedorService.getFornecedores();
            res.status(200).send(fornecedores); // Envie os fornecedores como resposta
        }
        catch (error) {
            res.status(500).send({ error: error.message }); // Trate erros internos do servidor
        }
    }
}
exports.FornecedorController = FornecedorController;
