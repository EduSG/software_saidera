import { Request, Response } from 'express'; // Importe Request e Response do Express
import { UsuarioService } from '../services/usuario_service';
import { RequestBody, UsuarioTypes } from '../interfaces';

export class UsuarioController {
  static async adicionaUsuarioLote(req: Request, res: Response) {
    // No Express, o corpo da requisição está em req.body
    const dados: RequestBody<UsuarioTypes> = req.body;

    try {
      const usuarios_lotes = await UsuarioService.createLote(dados);
      res.status(200).send(usuarios_lotes); // Use res.status().send() para enviar a resposta
    } catch (error: any) {
      res.status(400).send({ error: error.message }); // Envie o erro como resposta
    }
  }

  static async getUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await UsuarioService.getUsuarios();
      console.log(usuarios)
      res.status(200).send(usuarios); // Envie os usuários como resposta
    } catch (error: any) {
      res.status(500).send({ error: error.message }); // Trate erros internos do servidor
    }
  }
}
