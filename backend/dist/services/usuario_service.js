"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const usuario_repository_1 = require("../repositorys/usuario_repository");
const usuario_repo = new usuario_repository_1.UsuarioRepository({});
class UsuarioService {
    static async createLote(dados) {
        return usuario_repo.createLote(dados);
    }
    static async getUsuarios() {
        return usuario_repo.getUsuarios();
    }
}
exports.UsuarioService = UsuarioService;
