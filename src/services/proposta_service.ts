import Proposta from "../models/proposta.model";

export class PropostaService {
  static async createUser(id: number, categoria: string) {
    return Proposta.create({ id, categoria });
  }

  static async getAllUsers() {
    return Proposta.findAll();
  }
}
