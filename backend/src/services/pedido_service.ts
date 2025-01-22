
import { RequestBody, PedidoAttributes } from "../interfaces";
import Pedido from "../models/pedido.model";

export class PedidoService {
  static async createLote(dados: RequestBody<PedidoAttributes>) {
    const promises = Object.values(dados).map((pedido) =>
      Pedido.create(pedido),
    );
    await Promise.all(promises);

    return;
  }

  static async getPedidos() {
    return Pedido.findAll();
  }
}
