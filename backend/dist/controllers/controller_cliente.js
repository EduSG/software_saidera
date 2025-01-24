"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const cliente_service_1 = require("../services/cliente_service");
class ClienteController {
    static async adicionaClienteLote(req, res) {
        // No Express, o corpo da requisição está em req.body
        const dados = req.body;
        try {
            const cliente_lotes = await cliente_service_1.ClienteService.createLote(dados);
            res.status(200).send(cliente_lotes); // Use res.status().send() para enviar a resposta
        }
        catch (error) {
            res.status(400).send({ error: error.message }); // Envie o erro como resposta
        }
    }
    static async getClientes(req, res) {
        try {
            const clientes = await cliente_service_1.ClienteService.getClientes();
            res.status(200).send(clientes); // Envie os clientes como resposta
        }
        catch (error) {
            res.status(500).send({ error: error.message }); // Trate erros internos do servidor
        }
    }
}
exports.ClienteController = ClienteController;
