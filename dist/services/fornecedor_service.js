"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorService = void 0;
const fornecedor_model_1 = __importDefault(require("../models/fornecedor.model"));
class FornecedorService {
    static async createLote(dados) {
        const promises = Object.values(dados).map((fornecedor) => fornecedor_model_1.default.create(fornecedor));
        await Promise.all(promises);
        return;
    }
    static async getFornecedores() {
        return fornecedor_model_1.default.findAll();
    }
}
exports.FornecedorService = FornecedorService;
