import { Request, Response } from 'express'; // Importe Request e Response do Express
import { PropostaService } from '../services/proposta_service';
import { RequestBody, PropostaAttributes } from '../interfaces';

export class PropostaController {
  static async adicionaPropostaLote(req: Request, res: Response) {
    // No Express, o corpo da requisição está em req.body
    const dados: RequestBody<PropostaAttributes> = req.body;
    console.log(dados); // Log dos dados recebidos

    try {
      const propostas_lotes = await PropostaService.createLote(dados);
      res.status(200).send(propostas_lotes); // Use res.status().send() para enviar a resposta
    } catch (error: any) {
      res.status(400).send({ error: error.message }); // Envie o erro como resposta
    }
  }

  static async buscaTodasPropostas(req: Request, res: Response) {
    try {
      const propostas = await PropostaService.getPropostas();
      res.status(200).send(propostas); // Envie as propostas como resposta
    } catch (error: any) {
      res.status(500).send({ error: error.message }); // Trate erros internos do servidor
    }
  }
}
