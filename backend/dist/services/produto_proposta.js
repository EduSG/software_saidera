"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosPropostaService = void 0;
const produto_proposta_repository_1 = require("../repositorys/produto_proposta_repository");
const produto_proposta_repository = new produto_proposta_repository_1.ProdutoPropostaRepository({});
class ProdutosPropostaService {
    static async createLote(dados) {
        return produto_proposta_repository.createLote(dados);
    }
    static async getProdutosProposta() {
        return produto_proposta_repository.getProdutosProposta();
    }
}
exports.ProdutosPropostaService = ProdutosPropostaService;
