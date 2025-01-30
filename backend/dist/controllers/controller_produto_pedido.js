"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPedidoController = void 0;
const produto_pedido_service_1 = require("../services/produto_pedido_service");
class ProdutoPedidoController {
    static async adicionarProdutoPedidoLote(req, res) {
        const dados = req.body;
        try {
            const produto_pedido_repo = await produto_pedido_service_1.ProdutosPedidoService.createLote(dados);
            res.status(200).send(produto_pedido_repo);
        }
        catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    static async getProdutoPedido(req, res) {
        try {
            const produto_pedido_repo = await produto_pedido_service_1.ProdutosPedidoService.getProdutosPedido();
            console.log(produto_pedido_repo);
            res.status(200).send(produto_pedido_repo);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}
exports.ProdutoPedidoController = ProdutoPedidoController;
