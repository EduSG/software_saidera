import { Request, Response } from 'express'; // Importe Request e Response do Express
import { RequestBody, ClienteTypes } from '../interfaces';
import { ClienteService } from '../services/cliente_service';

export class ClienteController {
  static async adicionaClienteLote(req: Request, res: Response) {
    // No Express, o corpo da requisição está em req.body
    const dados: RequestBody<ClienteTypes> = req.body;

    try {
      const cliente_lotes = await ClienteService.createLote(dados);
      res.status(200).send(cliente_lotes); // Use res.status().send() para enviar a resposta
    } catch (error: any) {
      res.status(400).send({ error: error.message }); // Envie o erro como resposta
    }
  }

  static async getClientes(req: Request, res: Response) {
    try {
      const clientes = await ClienteService.getClientes();
      res.status(200).send(clientes); // Envie os clientes como resposta
    } catch (error: any) {
      res.status(500).send({ error: error.message }); // Trate erros internos do servidor
    }
  }
}
