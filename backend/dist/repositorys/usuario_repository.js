"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
class UsuarioRepository {
    constructor(usuarios) {
        this.usuarios = {};
        this.usuarios = usuarios;
    }
    async getUsuarios() {
        try {
            const usuarios = await usuario_model_1.default.findAll();
            return usuarios.map((usuario) => usuario.toJSON());
        }
        catch (error) {
            console.error("Erro ao adicionar usuario:", error);
            throw new Error("Não foi possível adicionar o usuario.");
        }
    }
    async createLote(dados) {
        const promises = Object.values(dados).map((usuario) => usuario_model_1.default.create(usuario));
        await Promise.all(promises);
        return;
    }
}
exports.UsuarioRepository = UsuarioRepository;
