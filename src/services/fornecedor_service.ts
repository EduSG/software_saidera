import { RequestBody, FornecedorTypes } from "../interfaces";
import Fornecedores from "../models/fornecedor.model";

export class FornecedorService {
  static async createLote(dados: RequestBody<FornecedorTypes>) {
    
    const promises = Object.values(dados).map((fornecedor) =>
      Fornecedores.create(fornecedor),
    );
    await Promise.all(promises);

    return;
  }

  static async getFornecedores() {
    return Fornecedores.findAll();
  }
}

