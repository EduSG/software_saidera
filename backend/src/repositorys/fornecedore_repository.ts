import { RequestBody, FornecedorTypes } from "../interfaces";
import Fornecedores from "../models/fornecedor.model";

export class FornecedorRepository {
  public fornecedores: RequestBody<FornecedorTypes> = {};

  constructor(fornecedores: RequestBody<FornecedorTypes>) {
    this.fornecedores = fornecedores;
  }

  public async getFornecedores(): Promise<FornecedorTypes[]> {
    try {
      const fornecedores = await Fornecedores.findAll();
      return fornecedores.map((fornecedor: any) =>
        fornecedor.toJSON(),
      ) as FornecedorTypes[];
    } catch (error) {
      console.error("Erro ao adicionar fornecedor:", error);
      throw new Error("Não foi possível adicionar o fornecedor.");
    }
  }

public async createLote(dados: RequestBody<FornecedorTypes>) {
  console.log("Dados recebidos:", dados);

  const fornecedoresData = Object.values(dados).map((fornecedor: FornecedorTypes) => ({
    id: +fornecedor.id,
    nome_fantasia: fornecedor.nome_fantasia || "Desconhecido",
    razao_social: fornecedor.razao_social || "Desconhecido",
    categoria: fornecedor.categoria || "N/A",
    id_gestor_produto: fornecedor.id_gestor_produto || 145,
    produto_estrategico: fornecedor.produto_estrategico || false,
    cnpj: fornecedor.cnpj || "N/A",
  }));

  console.log("Dados processados para o banco:", fornecedoresData);

  try {
    await Fornecedores.bulkCreate(fornecedoresData, { validate: true });
    console.log("Fornecedores inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir fornecedores:", error);
    throw error;
  }

  return;
}

}
