
import { RequestBody, PedidoAttributes } from "../interfaces";
import Pedido from "../models/pedido.model";

export class PedidoService {
  static async createLote(dados: RequestBody<PedidoAttributes>) {

    const PedidoData = Object.values(dados).map((pedido: PedidoAttributes) => ({
    id: +pedido.id,
    data_pedido: pedido.data_pedido || "Desconhecido",
    empresa: pedido.empresa || 99,
    id_vendedor: pedido.id_vendedor || 1,
    id_proposta: pedido.id_proposta || 145,
    id_cliente: pedido.id_cliente || 145,
  }));

    await Pedido.bulkCreate(PedidoData, { validate: true });

  }

  static async getPedidos() {
    return Pedido.findAll();
  }
}
