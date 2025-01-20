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
    const promises = Object.values(dados).map((fornecedor) =>
      Fornecedores.create(fornecedor),
    );
    await Promise.all(promises);

    return;
  }
}
