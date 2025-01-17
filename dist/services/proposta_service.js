"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostaService = void 0;
const proposta_model_1 = require("../models/proposta_model");
class PropostaService {
    static async createUser(id, categoria) {
        return proposta_model_1.Proposta.create({ id, categoria });
    }
    static async getAllUsers() {
        return proposta_model_1.Proposta.findAll();
    }
}
exports.PropostaService = PropostaService;
