"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuario_service_1 = require("../services/usuario_service");
class UsuarioController {
    static async adicionaUsuarioLote(req, reply) {
        const dados = req.body;
        try {
            const propostas_lotes = await usuario_service_1.UsuarioService.createLote(dados);
            reply.status(200).send(propostas_lotes);
        }
        catch (error) {
            reply.status(400).send({ error: error });
        }
    }
    static async buscaTodasPropostas(req, reply) {
        const users = await usuario_service_1.UsuarioService.getUsuarios();
        reply.send(users);
    }
}
exports.UsuarioController = UsuarioController;
