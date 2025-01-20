
import { FastifyReply, FastifyRequest } from 'fastify';
import { RequestBody, FornecedorTypes } from '../interfaces';
import { FornecedorService } from '../services/fornecedor_service';

export class FornecedorController {
  static async adicionaFornecedorLote(req: FastifyRequest, reply: FastifyReply){
    const dados: RequestBody<FornecedorTypes> = req.body as RequestBody<FornecedorTypes> 
    
    try{
      const fornecedor_lotes = await FornecedorService.createLote(dados)
      reply.status(200).send(fornecedor_lotes)
    }catch(error: any){
      reply.status(400).send({ error: error })
    } 
  }

  static async getFornecedores(req: FastifyRequest, reply: FastifyReply) {
    const fornecedores = await FornecedorService.getFornecedores();
    reply.send(fornecedores);
  }
}
