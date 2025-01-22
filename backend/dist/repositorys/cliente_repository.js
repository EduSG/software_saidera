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
        console.log("Dados recebidos:", dados);
        const clientesData = Object.values(dados).map((cliente) => ({
            id: +cliente.id,
            nome_fantasia: cliente.nome_fantasia,
            razao_social: cliente.razao_social,
            categoria: cliente.categoria || "N/A",
            subcategoria: cliente.subcategoria || "N/A",
            cnpj: cliente.cnpj || "N/A",
            id_vendedor: +cliente.id_vendedor,
        }));
        console.log("Dados processados para o banco:", clientesData);
        try {
            await cliente_model_1.default.bulkCreate(clientesData, { validate: true });
            // const promises = clientesData.map((cliente) => Clientes.create(cliente));
            // await Promise.all(promises);
            console.log("Clientes inseridos com sucesso!");
        }
        catch (error) {
            console.error("Erro ao inserir clientes:", error);
            throw error;
        }
        return;
    }
}
exports.ClienteRepository = ClienteRepository;
