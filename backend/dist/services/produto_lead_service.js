"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosLeadService = void 0;
const produto_lead_repository_1 = require("../repositorys/produto_lead_repository");
const produto_lead_repository = new produto_lead_repository_1.ProdutoLeadRepository({});
class ProdutosLeadService {
    static async createLote(dados) {
        return produto_lead_repository.createLote(dados);
    }
    static async getProdutosLead() {
        return produto_lead_repository.getProdutosLead();
    }
}
exports.ProdutosLeadService = ProdutosLeadService;
