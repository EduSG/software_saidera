"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoLeadRepository = void 0;
const produto_lead_model_1 = __importDefault(require("../models/produto_lead.model"));
class ProdutoLeadRepository {
    constructor(produtosLead) {
        this.produtosLead = {};
        this.produtosLead = produtosLead;
    }
    async getProdutosLead() {
        try {
            const produtosLead = await produto_lead_model_1.default.findAll();
            return produtosLead.map((produtoLead) => produtoLead.toJSON());
        }
        catch (error) {
            console.error("Erro ao buscar produtos do pedido:", error);
            throw new Error("Não foi possível buscar os produtos do pedido.");
        }
    }
    async createLote(dados) {
        console.log("Dados recebidos:", dados);
        const produtosLeadData = Object.values(dados).map((produtoLead) => ({
            id: +produtoLead.id,
            data_lead: produtoLead.data_lead,
            empresa: +produtoLead.empresa || 13,
            id_lead: +produtoLead.id_lead,
            id_vendedor: +produtoLead.id_vendedor,
            id_fornecedor: +produtoLead.id_fornecedor,
            id_cliente: +produtoLead.id_cliente,
            valor_total: +produtoLead.valor_total,
            valor_unitario: +produtoLead.valor_unitario,
            quantidade: +produtoLead.quantidade
        }));
        console.log("Dados processados para o banco:", produtosLeadData);
        try {
            await produto_lead_model_1.default.bulkCreate(produtosLeadData, { validate: true });
            console.log("Produtos do pedido inseridos com sucesso!");
        }
        catch (error) {
            console.error("Erro ao inserir produtos do pedido:", error);
            throw error;
        }
        return;
    }
}
exports.ProdutoLeadRepository = ProdutoLeadRepository;
