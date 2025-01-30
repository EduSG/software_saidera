import { RequestBody, ProdutoPropostaAttributes } from "../interfaces";
import { ProdutoPropostaRepository } from "../repositorys/produto_proposta_repository";

const produto_proposta_repository = new ProdutoPropostaRepository({});

export class ProdutosPropostaService {
  
  static async createLote(dados: RequestBody<ProdutoPropostaAttributes>){
    return produto_proposta_repository.createLote(dados)
  }

  static async getProdutosProposta(){
    return produto_proposta_repository.getProdutosProposta();
  }

}






