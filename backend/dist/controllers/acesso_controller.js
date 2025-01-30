"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessoController = void 0;
const acesso_service_1 = require("../services/acesso_service");
class AcessoController {
    static async adicionaAcesso(req, res) {
        const dados = req.body;
        try {
            const acesso_lotes = await acesso_service_1.AcessoService.createAcesso(dados);
            res.status(200).send(acesso_lotes);
        }
        catch (error) {
            res.status(400).send({ error: error.message }); // Envie o erro como resposta
        }
    }
    static async getAcessos(req, res) {
        try {
            const usuarios = await acesso_service_1.AcessoService.getAcessos();
            console.log(usuarios);
            res.status(200).send(usuarios); // Envie os usuários como resposta
        }
        catch (error) {
            res.status(500).send({ error: error.message }); // Trate erros internos do servidor
        }
    }
}
exports.AcessoController = AcessoController;
