"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const pedido_model_1 = __importDefault(require("../models/pedido.model"));
class PedidoService {
    static async createLote(dados) {
        const promises = Object.values(dados).map((pedido) => pedido_model_1.default.create(pedido));
        await Promise.all(promises);
        return;
    }
    static async getPedidos() {
        return pedido_model_1.default.findAll();
    }
}
exports.PedidoService = PedidoService;
