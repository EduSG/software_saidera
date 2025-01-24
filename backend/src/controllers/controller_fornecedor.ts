import { Request, Response } from 'express'; // Importe Request e Response do Express
import { RequestBody, FornecedorTypes } from '../interfaces';
import { FornecedorService } from '../services/fornecedor_service';

export class FornecedorController {
  static async adicionaFornecedorLote(req: Request, res: Response) {
    // No Express, o corpo da requisição está em req.body
    const dados: RequestBody<FornecedorTypes> = req.body;

    try {
      const fornecedor_lotes = await FornecedorService.createLote(dados);
      res.status(200).send(fornecedor_lotes); // Use res.status().send() para enviar a resposta
    } catch (error: any) {
      res.status(400).send({ error: error.message }); // Envie o erro como resposta
    }
  }

  static async getFornecedores(req: Request, res: Response) {
    try {
      const fornecedores = await FornecedorService.getFornecedores();
      res.status(200).send(fornecedores); // Envie os fornecedores como resposta
    } catch (error: any) {
      res.status(500).send({ error: error.message }); // Trate erros internos do servidor
    }
  }
}
