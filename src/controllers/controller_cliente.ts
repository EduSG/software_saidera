import { FastifyReply, FastifyRequest } from 'fastify';
import { RequestBody, ClienteTypes } from '../interfaces';
import {ClienteService} from '../services/cliente_service';


export class ClienteController {
  static async adicionaClienteLote(req: FastifyRequest, reply: FastifyReply){
    const dados: RequestBody<ClienteTypes> = req.body as RequestBody<ClienteTypes> 
    
    try{
      const cliente_lotes = await ClienteService.createLote(dados)
      reply.status(200).send(cliente_lotes)
    }catch(error: any){
      reply.status(400).send({ error: error })
    } 
  }

  static async getClientes(req: FastifyRequest, reply: FastifyReply) {
    const clientes = await ClienteService.getClientes();
    reply.send(clientes);
  }
}
