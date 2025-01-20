import Proposta from "../models/proposta.model";
import { RequestBody, PropostaAttributes } from "../interfaces";

export class PropostaService {
  static async createLote(dados: RequestBody<PropostaAttributes>) {
    const promises = Object.values(dados).map((proposta) =>
      Proposta.create(proposta),
    );
    await Promise.all(promises);

    return;
  }

  static async getPropostas() {
    return Proposta.findAll();
  }
}
