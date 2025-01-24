"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPedidoRepository = void 0;
const produto_pedido_model_1 = __importDefault(require("../models/produto_pedido.model"));
class ProdutoPedidoRepository {
    constructor(produtosPedido) {
        this.produtosPedido = {};
        this.produtosPedido = produtosPedido;
    }
    async getProdutosPedido() {
        try {
            const produtosPedido = await produto_pedido_model_1.default.findAll();
            return produtosPedido.map((produtoPedido) => produtoPedido.toJSON());
        }
        catch (error) {
            console.error("Erro ao buscar produtos do pedido:", error);
            throw new Error("Não foi possível buscar os produtos do pedido.");
        }
    }
    async createLote(dados) {
        console.log("Dados recebidos:", dados);
        const produtosPedidoData = Object.values(dados).map((produtoPedido) => ({
            id: +produtoPedido.id,
            data_pedido: produtoPedido.data_pedido,
            empresa: +produtoPedido.empresa || 13,
            id_pedido: +produtoPedido.id_pedido,
            id_vendedor: +produtoPedido.id_vendedor,
            id_fornecedor: +produtoPedido.id_fornecedor,
            id_cliente: +produtoPedido.id_cliente,
            valor_total: +produtoPedido.valor_total,
            valor_unitario: +produtoPedido.valor_unitario,
            quantidade: +produtoPedido.quantidade
        }));
        console.log("Dados processados para o banco:", produtosPedidoData);
        try {
            await produto_pedido_model_1.default.bulkCreate(produtosPedidoData, { validate: true });
            console.log("Produtos do pedido inseridos com sucesso!");
        }
        catch (error) {
            console.error("Erro ao inserir produtos do pedido:", error);
            throw error;
        }
        return;
    }
}
exports.ProdutoPedidoRepository = ProdutoPedidoRepository;
