import { RequestBody, FornecedorTypes } from "../interfaces";
import { FornecedorRepository } from "../repositorys/fornecedore_repository";

const fornecedor_repo = new FornecedorRepository({});

export class FornecedorService {

  static async createLote(dados: RequestBody<FornecedorTypes>) {
    return fornecedor_repo.createLote(dados); 
  }

  static async getFornecedores() {
    return fornecedor_repo.getFornecedores();
  }
}


