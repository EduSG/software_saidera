import { FastifyReply, FastifyRequest } from 'fastify';
import { PropostaService } from '../services/proposta_service';

export class PropostaController {
  static async adicionaPropostaIndividual(req: FastifyRequest, reply: FastifyReply) {
    const { id , categoria } = req.body as { id: number; categoria: string };
    try {
      const user = await PropostaService.createUser(id, categoria);
      reply.status(201).send(user);
    } catch (error: any) {
      reply.status(400).send({ error: error.message });
    }
  }

  static async buscaTodasPropostas(req: FastifyRequest, reply: FastifyReply) {
    const users = await PropostaService.getAllUsers();
    reply.send(users);
  }
}
