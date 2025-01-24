import ProdutoPedido from "../models/produto_pedido.model";
import { RequestBody, ProdutoPedidoAttributes } from "../interfaces";

export class ProdutoPedidoRepository {
  public produtosPedido: RequestBody<ProdutoPedidoAttributes> = {};

  constructor(produtosPedido: RequestBody<ProdutoPedidoAttributes>) {
    this.produtosPedido = produtosPedido;
  }

  public async getProdutosPedido(): Promise<ProdutoPedidoAttributes[]> {
    try {
      const produtosPedido = await ProdutoPedido.findAll();
      return produtosPedido.map((produtoPedido: any) => produtoPedido.toJSON()) as ProdutoPedidoAttributes[];
    } catch (error) {
      console.error("Erro ao buscar produtos do pedido:", error);
      throw new Error("Não foi possível buscar os produtos do pedido.");
    }
  }

  public async createLote(dados: RequestBody<ProdutoPedidoAttributes>) {
    console.log("Dados recebidos:", dados);

    const produtosPedidoData = Object.values(dados).map((produtoPedido: ProdutoPedidoAttributes) => ({
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
      await ProdutoPedido.bulkCreate(produtosPedidoData, { validate: true });
      console.log("Produtos do pedido inseridos com sucesso!");
    } catch (error) {
      console.error("Erro ao inserir produtos do pedido:", error);
      throw error;
    }

    return;
  }
}
