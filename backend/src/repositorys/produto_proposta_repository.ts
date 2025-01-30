
import { RequestBody, ProdutoPropostaAttributes } from "../interfaces";
import ProdutoProposta from "../models/produto_proposta.model";

export class ProdutoPropostaRepository {
  public produtosProposta: RequestBody<ProdutoPropostaAttributes> = {};

  constructor(produtosProposta: RequestBody<ProdutoPropostaAttributes>) {
    this.produtosProposta = produtosProposta;
  }

  public async getProdutosProposta(): Promise<ProdutoPropostaAttributes[]> {
    try {
      const produtosProposta = await ProdutoProposta.findAll();
      return produtosProposta.map((produtoProposta: any) => produtoProposta.toJSON()) as ProdutoPropostaAttributes[];
    } catch (error) {
      console.error("Erro ao buscar produtos do pedido:", error);
      throw new Error("Não foi possível buscar os produtos do pedido.");
    }
  }

  public async createLote(dados: RequestBody<ProdutoPropostaAttributes>) {
    console.log("Dados recebidos:", dados);

    const produtosPropostaData = Object.values(dados).map((produtoProposta: ProdutoPropostaAttributes) => ({
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
      await ProdutoProposta.bulkCreate(produtosPropostaData, { validate: true });
      console.log("Produtos do pedido inseridos com sucesso!");
    } catch (error) {
      console.error("Erro ao inserir produtos do pedido:", error);
      throw error;
    }

    return;
  }
}
