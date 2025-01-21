import { ClienteRepository } from "../repositorys/cliente_repository";
import { RequestBody, ClienteTypes } from "../interfaces";

const cliente_repo = new ClienteRepository({});

export class ClienteService {

  static async createLote(dados: RequestBody<ClienteTypes>) {
    return cliente_repo.createLote(dados); 
  }

  static async getClientes() {
    return cliente_repo.getClientes();
  }
}

