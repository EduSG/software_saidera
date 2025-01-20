"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const cliente_service_1 = require("../services/cliente_service");
class ClienteController {
    static async adicionaClienteLote(req, reply) {
        const dados = req.body;
        try {
            const cliente_lotes = await cliente_service_1.ClienteService.createLote(dados);
            reply.status(200).send(cliente_lotes);
        }
        catch (error) {
            reply.status(400).send({ error: error });
        }
    }
    static async getClientes(req, reply) {
        const clientes = await cliente_service_1.ClienteService.getClientes();
        reply.send(clientes);
    }
}
exports.ClienteController = ClienteController;
