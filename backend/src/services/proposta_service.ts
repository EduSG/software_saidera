import Proposta from "../models/proposta.model";
import { RequestBody, PropostaAttributes } from "../interfaces";

export class PropostaService {
  static async createLote(dados: RequestBody<PropostaAttributes>) {
    await Proposta.bulkCreate(Object.values(dados), { validate: true });
  }

  static async getPropostas() {
    return Proposta.findAll();
  }
}
