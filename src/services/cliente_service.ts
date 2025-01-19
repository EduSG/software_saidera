import { RequestBody, ClienteTypes } from "../interfaces";
import Clientes from "../models/cliente.model";

export class ClienteService {
  static async createLote(dados: RequestBody<ClienteTypes>) {
    
    const promises = Object.values(dados).map((cliente) =>
      Clientes.create(cliente),
    );
    await Promise.all(promises);

    return;
  }

  static async getClientes() {
    return Clientes.findAll();
  }
}

