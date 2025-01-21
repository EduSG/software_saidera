import Clientes from "../models/cliente.model";
import { RequestBody, ClienteTypes } from "../interfaces";

export class ClienteRepository {
  public clientes: RequestBody<ClienteTypes> = {};

  constructor(clientes: RequestBody<ClienteTypes>) {
    this.clientes = clientes;
  }

  public async getClientes(): Promise<ClienteTypes[]> {
    try {
      const clientes = await Clientes.findAll();
      return clientes.map((cliente: any) => cliente.toJSON()) as ClienteTypes[];
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
      throw new Error("Não foi possível adicionar o cliente.");
    }
  }

  public async createLote(dados: RequestBody<ClienteTypes>) {
    const promises = Object.values(dados).map((cliente) =>
      Clientes.create(cliente),
    );
    await Promise.all(promises);

    return;
  }
}
