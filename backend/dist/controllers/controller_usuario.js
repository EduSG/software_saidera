"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const usuario_service_1 = require("../services/usuario_service");
class UsuarioController {
    static async adicionaUsuarioLote(req, res) {
        // No Express, o corpo da requisição está em req.body
        const dados = req.body;
        try {
            const usuarios_lotes = await usuario_service_1.UsuarioService.createLote(dados);
            res.status(200).send(usuarios_lotes); // Use res.status().send() para enviar a resposta
        }
        catch (error) {
            res.status(400).send({ error: error.message }); // Envie o erro como resposta
        }
    }
    static async getUsuarios(req, res) {
        try {
            const usuarios = await usuario_service_1.UsuarioService.getUsuarios();
            console.log(usuarios);
            res.status(200).send(usuarios); // Envie os usuários como resposta
        }
        catch (error) {
            res.status(500).send({ error: error.message }); // Trate erros internos do servidor
        }
    }
}
exports.UsuarioController = UsuarioController;
