"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosPedidoService = void 0;
const produto_pedido_repository_1 = require("../repositorys/produto_pedido_repository");
const produto_pedido_rep = new produto_pedido_repository_1.ProdutoPedidoRepository({});
class ProdutosPedidoService {
    static async createLote(dados) {
        return produto_pedido_rep.createLote(dados);
    }
    static async getProdutosPedido() {
        return produto_pedido_rep.getProdutosPedido();
    }
}
exports.ProdutosPedidoService = ProdutosPedidoService;
