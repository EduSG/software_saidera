"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorService = void 0;
const fornecedore_repository_1 = require("../repositorys/fornecedore_repository");
const fornecedor_repo = new fornecedore_repository_1.FornecedorRepository({});
class FornecedorService {
    static async createLote(dados) {
        return fornecedor_repo.createLote(dados);
    }
    static async getFornecedores() {
        return fornecedor_repo.getFornecedores();
    }
}
exports.FornecedorService = FornecedorService;
