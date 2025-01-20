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
        const promises = Object.values(dados).map((fornecedor) => fornecedor_model_1.default.create(fornecedor));
        await Promise.all(promises);
        return;
    }
}
exports.FornecedorRepository = FornecedorRepository;
