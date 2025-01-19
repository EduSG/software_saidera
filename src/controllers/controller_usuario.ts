import { FastifyReply, FastifyRequest } from 'fastify';
import { UsuarioService } from '../services/usuario_service';
import { RequestBody, UsuarioTypes } from '../interfaces';

export class UsuarioController {
  static async adicionaUsuarioLote(req: FastifyRequest, reply: FastifyReply){
    const dados: RequestBody<UsuarioTypes> = req.body as RequestBody<UsuarioTypes> 
    
    try{
      const propostas_lotes = await UsuarioService.createLote(dados)
      reply.status(200).send(propostas_lotes)
    }catch(error: any){
      reply.status(400).send({ error: error })
    } 
  }

  static async buscaTodasPropostas(req: FastifyRequest, reply: FastifyReply) {
    const users = await UsuarioService.getUsuarios();
    reply.send(users);
  }
}
