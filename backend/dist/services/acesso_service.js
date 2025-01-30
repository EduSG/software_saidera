"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessoService = void 0;
const acesso_repotitory_1 = require("../repositorys/acesso_repotitory");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const acesso_repo = new acesso_repotitory_1.AcessoRepository();
class AcessoService {
    static async createAcesso(dados) {
        // Verifica se já existe um acesso com o e-mail fornecido
        const acessoExistente = await acesso_repo.findByEmail(dados.email);
        console.log("esse msm otario", acessoExistente);
        if (acessoExistente !== null && acessoExistente !== undefined) {
            throw new Error('Já existe um acesso com este e-mail.');
        }
        // Criptografa a senha antes de salvar
        const salt = await bcryptjs_1.default.genSalt(10); // Gera um salt
        const senhaCriptografada = await bcryptjs_1.default.hash(dados.senha, salt); // Criptografa a senha
        // Substitui a senha original pela senha criptografada
        const dadosComSenhaCriptografada = {
            ...dados,
            senha: senhaCriptografada,
        };
        // Salva no banco de dados
        return acesso_repo.createAcesso(dadosComSenhaCriptografada);
    }
    static async getAcessos() {
        return acesso_repo.getAcessos();
    }
}
exports.AcessoService = AcessoService;
