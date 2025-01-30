import { RequestBody, ProdutoPedidoAttributes } from "../interfaces";
import { ProdutoPedidoRepository } from "../repositorys/produto_pedido_repository";

const produto_pedido_rep = new ProdutoPedidoRepository({});

export class ProdutosPedidoService {
  
  static async createLote(dados: RequestBody<ProdutoPedidoAttributes>){
    return produto_pedido_rep.createLote(dados)
  }

  static async getProdutosPedido(){
    return produto_pedido_rep.getProdutosPedido();
  }

}






