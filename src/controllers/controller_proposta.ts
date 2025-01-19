import { FastifyReply, FastifyRequest } from 'fastify';
import { PropostaService } from '../services/proposta_service';
import { RequestBody, PropostaAttributes } from '../interfaces';

export class PropostaController {
  static async adicionaPropostaLote(req: FastifyRequest, reply: FastifyReply){
    const dados: RequestBody<PropostaAttributes> = req.body as RequestBody<PropostaAttributes> 
    console.log(dados)
    
    try{
      const propostas_lotes = await PropostaService.createLote(dados)
      reply.status(200).send(propostas_lotes)
    }catch(error: any){
      reply.status(400).send({ error: error })
    } 
  }

  static async buscaTodasPropostas(req: FastifyRequest, reply: FastifyReply) {
    const users = await PropostaService.getPropostas();
    reply.send(users);
  }
}
