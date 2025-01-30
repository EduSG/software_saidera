import { RequestBody, ProdutoLeadAttributes } from "../interfaces";
import { ProdutoLeadRepository } from "../repositorys/produto_lead_repository";

const produto_lead_repository = new ProdutoLeadRepository({});

export class ProdutosLeadService {
  
  static async createLote(dados: RequestBody<ProdutoLeadAttributes>){
    return produto_lead_repository.createLote(dados)
  }

  static async getProdutosLead(){
    return produto_lead_repository.getProdutosLead();
  }

}






