import { Request, Response } from "express"; // Importe Request e Response do Express
import { RequestBody, ProdutoPedidoAttributes } from "../interfaces";
import { ProdutosPedidoService } from "../services/produto_pedido_service";

export class ProdutoPedidoController {
  static async adicionarProdutoPedidoLote(req: Request, res: Response) {
    const dados: RequestBody<ProdutoPedidoAttributes> = req.body;
    try {
      const produto_pedido_repo = await ProdutosPedidoService.createLote(dados);
      res.status(200).send(produto_pedido_repo);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  static async getProdutoPedido(req: Request, res: Response) {
    try {
      const produto_pedido_repo = await ProdutosPedidoService.getProdutosPedido();
      console.log(produto_pedido_repo);
      res.status(200).send(produto_pedido_repo);
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  }
}

