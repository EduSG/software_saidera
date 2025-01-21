import { FastifyReply, FastifyRequest } from 'fastify';
import { RequestBody, LeadAttributes } from '../interfaces';
import { LeadService } from '../services/lead_service';

export class LeadController {
  static async adicionaLeadLote(req: FastifyRequest, reply: FastifyReply){
    const dados: RequestBody<LeadAttributes> = req.body as RequestBody<LeadAttributes> 
    console.log(dados)
    
    try{
      const propostas_lotes = await LeadService.createLote(dados)
      reply.status(200).send(propostas_lotes)
    }catch(error: any){
      reply.status(400).send({ error: error })
    } 
  }

  static async buscaTodasLeads(req: FastifyRequest, reply: FastifyReply) {
    const users = await getPropostas();
    reply.send(users);
  }
}
