import { Request, Response } from 'express'; // Importe Request e Response do Express
import { AcessoService } from '../services/acesso_service';
import { RequestBody, AcessoTypes } from '../interfaces';

export class AcessoController {
  static async adicionaAcesso(req: Request, res: Response) {

    const dados: AcessoTypes = req.body;

    try {
      const acesso_lotes = await AcessoService.createAcesso(dados);
      res.status(200).send(acesso_lotes); 
    } catch (error: any) {
      res.status(400).send({ error: error.message }); // Envie o erro como resposta
    }
  }

  static async getAcessos(req: Request, res: Response) {
    try {
      const usuarios = await AcessoService.getAcessos();
      console.log(usuarios)
      res.status(200).send(usuarios); // Envie os usuários como resposta
    } catch (error: any) {
      res.status(500).send({ error: error.message }); // Trate erros internos do servidor
    }
  }

  //static async updateUsuario(req: Request, res: Response) {
  //  try{
  //    const { id } = req.params;
  //    const usuario = await AcessoService.updateUsuario(id);
  //    console.log(usuario)
  //  }catch(err: any){
  //
  //  }
  //}
}
