"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const cliente_repository_1 = require("../repositorys/cliente_repository");
const cliente_repo = new cliente_repository_1.ClienteRepository({});
class ClienteService {
    static async createLote(dados) {
        return cliente_repo.createLote(dados);
    }
    static async getClientes() {
        return cliente_repo.getClientes();
    }
}
exports.ClienteService = ClienteService;
