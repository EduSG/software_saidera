"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const cliente_model_1 = __importDefault(require("../models/cliente.model"));
class ClienteService {
    static async createLote(dados) {
        const promises = Object.values(dados).map((cliente) => cliente_model_1.default.create(cliente));
        await Promise.all(promises);
        return;
    }
    static async getClientes() {
        return cliente_model_1.default.findAll();
    }
}
exports.ClienteService = ClienteService;
