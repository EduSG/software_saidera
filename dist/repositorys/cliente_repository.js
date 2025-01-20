"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const cliente_model_1 = __importDefault(require("../models/cliente.model"));
class ClienteRepository {
    constructor(clientes) {
        this.clientes = {};
        this.clientes = clientes;
    }
    async getClientes() {
        try {
            const clientes = await cliente_model_1.default.findAll();
            return clientes.map((cliente) => cliente.toJSON());
        }
        catch (error) {
            console.error("Erro ao adicionar cliente:", error);
            throw new Error("Não foi possível adicionar o cliente.");
        }
    }
    async createLote(dados) {
        const promises = Object.values(dados).map((cliente) => cliente_model_1.default.create(cliente));
        await Promise.all(promises);
        return;
    }
}
exports.ClienteRepository = ClienteRepository;
