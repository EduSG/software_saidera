"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPropostaRepository = void 0;
const produto_proposta_model_1 = __importDefault(require("../models/produto_proposta.model"));
class ProdutoPropostaRepository {
    constructor(produtosProposta) {
        this.produtosProposta = {};
        this.produtosProposta = produtosProposta;
    }
    async getProdutosPedido() {
        try {
            const produtosProposta = await produto_proposta_model_1.default.findAll();
            return produtosProposta.map((produtoProposta) => produtoProposta.toJSON());
        }
        catch (error) {
            console.error("Erro ao buscar produtos do pedido:", error);
            throw new Error("Não foi possível buscar os produtos do pedido.");
        }
    }
    async createLote(dados) {
        console.log("Dados recebidos:", dados);
        const produtosPropostaData = Object.values(dados).map((produtoProposta) => ({
            id: +produtoProposta.id,
            data_proposta: produtoProposta.data_proposta,
            empresa: +produtoProposta.empresa || 13,
            id_proposta: +produtoProposta.id_proposta,
            id_vendedor: +produtoProposta.id_vendedor,
            id_fornecedor: +produtoProposta.id_fornecedor,
            id_cliente: +produtoProposta.id_cliente,
            valor_total: +produtoProposta.valor_total,
            valor_unitario: +produtoProposta.valor_unitario,
            quantidade: +produtoProposta.quantidade
        }));
        console.log("Dados processados para o banco:", produtosPropostaData);
        try {
            await produto_proposta_model_1.default.bulkCreate(produtosPropostaData, { validate: true });
            console.log("Produtos do pedido inseridos com sucesso!");
        }
        catch (error) {
            console.error("Erro ao inserir produtos do pedido:", error);
            throw error;
        }
        return;
    }
}
exports.ProdutoPropostaRepository = ProdutoPropostaRepository;
