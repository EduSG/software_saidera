"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
class UsuarioService {
    static async createLote(dados) {
        const promises = Object.values(dados).map((usuario) => usuario_model_1.default.create(usuario));
        await Promise.all(promises);
        return;
    }
    static async getUsuarios() {
        return usuario_model_1.default.findAll();
    }
}
exports.UsuarioService = UsuarioService;
