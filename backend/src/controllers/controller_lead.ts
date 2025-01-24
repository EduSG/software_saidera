import { Request, Response } from 'express'; // Importe Request e Response do Express
import { RequestBody, LeadAttributes } from '../interfaces';
import { LeadService } from '../services/lead_service';

export class LeadController {
  static async adicionaLeadLote(req: Request, res: Response) {
    // No Express, o corpo da requisição está em req.body
    const dados: RequestBody<LeadAttributes> = req.body;
    console.log(dados); // Log dos dados recebidos

    try {
      const propostas_lotes = await LeadService.createLote(dados);
      res.status(200).send(propostas_lotes); // Use res.status().send() para enviar a resposta
    } catch (error: any) {
      res.status(400).send({ error: error.message }); // Envie o erro como resposta
    }
  }

  static async buscaTodasLeads(req: Request, res: Response) {
    try {
      const leads = await LeadService.getLeads();
      res.status(200).send(leads); // Envie as leads como resposta
    } catch (error: any) {
      res.status(500).send({ error: error.message }); // Trate erros internos do servidor
    }
  }
}
