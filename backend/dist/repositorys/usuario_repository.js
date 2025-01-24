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
    // Método para buscar todos os usuários
    async getUsuarios() {
        try {
            const usuarios = await usuario_model_1.default.findAll();
            return usuarios.map((usuario) => usuario.toJSON());
        }
        catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw new Error("Não foi possível buscar os usuários.");
        }
    }
    // Método para buscar um usuário pelo ID
    async getUsuarioById(id) {
        try {
            const usuario = await usuario_model_1.default.findByPk(id);
            return usuario ? usuario.toJSON() : null;
        }
        catch (error) {
            console.error("Erro ao buscar usuário por ID:", error);
            throw new Error("Não foi possível buscar o usuário.");
        }
    }
    // Método para criar um usuário
    async createUsuario(usuarioData) {
        try {
            const usuario = await usuario_model_1.default.create(usuarioData);
            return usuario.toJSON();
        }
        catch (error) {
            console.error("Erro ao criar usuário:", error);
            throw new Error("Não foi possível criar o usuário.");
        }
    }
    // Método para atualizar um usuário
    async updateUsuario(id, usuarioData) {
        try {
            const [affectedRows] = await usuario_model_1.default.update(usuarioData, {
                where: { id },
            });
            if (affectedRows > 0) {
                const usuarioAtualizado = await usuario_model_1.default.findByPk(id);
                return usuarioAtualizado ? usuarioAtualizado.toJSON() : null;
            }
            return null;
        }
        catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw new Error("Não foi possível atualizar o usuário.");
        }
    }
    // Método para deletar um usuário
    async deleteUsuario(id) {
        try {
            const affectedRows = await usuario_model_1.default.destroy({ where: { id } });
            return affectedRows > 0;
        }
        catch (error) {
            console.error("Erro ao deletar usuário:", error);
            throw new Error("Não foi possível deletar o usuário.");
        }
    }
    // Método para criar usuários em lote
    async createLote(dados) {
        try {
            const promises = Object.values(dados).map((usuario) => usuario_model_1.default.create(usuario));
            await Promise.all(promises);
            console.log("Usuários inseridos com sucesso!");
        }
        catch (error) {
            console.error("Erro ao inserir usuários em lote:", error);
            throw error;
        }
    }
}
exports.UsuarioRepository = UsuarioRepository;
