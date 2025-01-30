"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessoRepository = void 0;
const acesso_model_1 = __importDefault(require("../models/acesso.model"));
class AcessoRepository {
    async createAcesso(dados) {
        try {
            const acesso = await acesso_model_1.default.create(dados);
            return acesso.toJSON();
        }
        catch (err) {
            console.error("Erro ao criar usuário:", err);
            throw new Error("Não foi possível criar o acesso!");
        }
    }
    async getAcessoById(id) {
        try {
            const acesso = await acesso_model_1.default.findByPk(id);
            return acesso ? acesso.toJSON() : null;
        }
        catch (err) {
            console.error("Erro ao criar usuário:", err);
            throw new Error("Não foi possível criar o acesso!");
        }
    }
    async findByEmail(email) {
        return acesso_model_1.default.findOne({ where: { email } });
    }
    async getAcessos() {
        try {
            const acessos = await acesso_model_1.default.findAll();
            return acessos.map((acesso) => acesso.toJSON());
        }
        catch (err) {
            console.error("Erro ao buscar acessos:", err);
            throw new Error("Não foi possível buscar os acessos.");
        }
    }
    async updateAcesso(id, dados) {
        try {
            const [affectedRows] = await acesso_model_1.default.update(dados, { where: { id } });
            if (affectedRows > 0) {
                const acesso = await acesso_model_1.default.findByPk(id);
                return acesso ? acesso.toJSON() : null;
            }
            return null;
        }
        catch (err) {
            console.error("Erro ao atualizar acesso", err);
            throw new Error("Não foi possível atualizar os acessos");
        }
    }
    async deleteAcessos(id) {
        try {
            const deletedAcesso = await acesso_model_1.default.destroy({ where: { id } });
            return deletedAcesso > 0;
        }
        catch (err) {
            console.log("Erro ao deletar acesso", err);
            throw new Error("Não foi possível deletar o acesso");
        }
    }
}
exports.AcessoRepository = AcessoRepository;
