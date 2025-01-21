"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorController = void 0;
const fornecedor_service_1 = require("../services/fornecedor_service");
class FornecedorController {
    static async adicionaFornecedorLote(req, reply) {
        const dados = req.body;
        try {
            const fornecedor_lotes = await fornecedor_service_1.FornecedorService.createLote(dados);
            reply.status(200).send(fornecedor_lotes);
        }
        catch (error) {
            reply.status(400).send({ error: error });
        }
    }
    static async getFornecedores(req, reply) {
        const fornecedores = await fornecedor_service_1.FornecedorService.getFornecedores();
        reply.send(fornecedores);
    }
}
exports.FornecedorController = FornecedorController;
