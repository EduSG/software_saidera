"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorRepository = void 0;
const fornecedor_model_1 = __importDefault(require("../models/fornecedor.model"));
class FornecedorRepository {
    constructor(fornecedores) {
        this.fornecedores = {};
        this.fornecedores = fornecedores;
    }
    async getFornecedores() {
        try {
            const fornecedores = await fornecedor_model_1.default.findAll();
            return fornecedores.map((fornecedor) => fornecedor.toJSON());
        }
        catch (error) {
            console.error("Erro ao adicionar fornecedor:", error);
            throw new Error("Não foi possível adicionar o fornecedor.");
        }
    }
    async createLote(dados) {
        console.log("Dados recebidos:", dados);
        const fornecedoresData = Object.values(dados).map((fornecedor) => ({
            id: +fornecedor.id,
            nome_fantasia: fornecedor.nome_fantasia || "Desconhecido",
            razao_social: fornecedor.razao_social || "Desconhecido",
            categoria: fornecedor.categoria || "N/A",
            id_gestor_produto: fornecedor.id_gestor_produto || 145,
            produto_estrategico: fornecedor.produto_estrategico || false,
            cnpj: fornecedor.cnpj || "N/A",
        }));
        console.log("Dados processados para o banco:", fornecedoresData);
        try {
            await fornecedor_model_1.default.bulkCreate(fornecedoresData, { validate: true });
            console.log("Fornecedores inseridos com sucesso!");
        }
        catch (error) {
            console.error("Erro ao inserir fornecedores:", error);
            throw error;
        }
        return;
    }
}
exports.FornecedorRepository = FornecedorRepository;
