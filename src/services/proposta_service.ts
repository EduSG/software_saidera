import Proposta from "../models/proposta.model";
import { RequestBody, PropostaAttributes } from "../interfaces";

export class PropostaService {
  static async createLote(dados: RequestBody<PropostaAttributes>) {
      const proposta = {
    data_proposta: new Date(),
    empresa: 123,
    id_usuario: 1,
    id_lead: 2,
    id_cliente: 3,
    id_fornecedor: 4,
    produtos_proposta: { item: 'Produto A', quantidade: 1 },
  };

  await Proposta.create(proposta); // Insere a proposta
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
