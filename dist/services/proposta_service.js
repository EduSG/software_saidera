"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaService = void 0;
const proposta_model_1 = __importDefault(require("../models/proposta.model"));
class PropostaService {
    static async createLote(dados) {
        const proposta = {
            data_proposta: new Date(),
            empresa: 123,
            id_usuario: 1,
            id_lead: 2,
            id_cliente: 3,
            id_fornecedor: 4,
            produtos_proposta: { item: 'Produto A', quantidade: 1 },
        };
        await proposta_model_1.default.create(proposta); // Insere a proposta
        const promises = Object.values(dados).map((proposta) => proposta_model_1.default.create(proposta));
        await Promise.all(promises);
        return;
    }
    static async getPropostas() {
        return proposta_model_1.default.findAll();
    }
}
exports.PropostaService = PropostaService;
