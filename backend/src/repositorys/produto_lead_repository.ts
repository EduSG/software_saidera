import { RequestBody, ProdutoLeadAttributes } from "../interfaces";
import ProdutoLead from "../models/produto_lead.model";

export class ProdutoLeadRepository {
  public produtosLead: RequestBody<ProdutoLeadAttributes> = {};

  constructor(produtosLead: RequestBody<ProdutoLeadAttributes>) {
    this.produtosLead = produtosLead;
  }

  public async getProdutosPedido(): Promise<ProdutoLeadAttributes[]> {
    try {
      const produtosLead = await ProdutoLead.findAll();
      return produtosLead.map((produtoLead: any) => produtoLead.toJSON()) as ProdutoLeadAttributes[];
    } catch (error) {
      console.error("Erro ao buscar produtos do pedido:", error);
      throw new Error("Não foi possível buscar os produtos do pedido.");
    }
  }

  public async createLote(dados: RequestBody<ProdutoLeadAttributes>) {
    console.log("Dados recebidos:", dados);

    const produtosLeadData = Object.values(dados).map((produtoLead: ProdutoLeadAttributes) => ({
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
      await ProdutoLead.bulkCreate(produtosLeadData, { validate: true });
      console.log("Produtos do pedido inseridos com sucesso!");
    } catch (error) {
      console.error("Erro ao inserir produtos do pedido:", error);
      throw error;
    }

    return;
  }
}
