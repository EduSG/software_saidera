"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const pedido_model_1 = __importDefault(require("../models/pedido.model"));
class PedidoService {
    static async createLote(dados) {
        const PedidoData = Object.values(dados).map((pedido) => ({
            id: +pedido.id,
            data_pedido: pedido.data_pedido || "Desconhecido",
            empresa: pedido.empresa || 99,
            id_vendedor: pedido.id_vendedor || 1,
            id_proposta: pedido.id_proposta || 145,
            id_cliente: pedido.id_cliente || 145,
        }));
        await pedido_model_1.default.bulkCreate(PedidoData, { validate: true });
    }
    static async getPedidos() {
        return pedido_model_1.default.findAll();
    }
}
exports.PedidoService = PedidoService;
