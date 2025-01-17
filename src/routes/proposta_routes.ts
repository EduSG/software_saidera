import { FastifyInstance } from 'fastify';
import { PropostaController } from '../controllers/controller_proposta';

export const PropostaRoutes = async (app: FastifyInstance) => {
  app.post('/proposta_indidual', PropostaController.adicionaPropostaIndividual);
  app.get('/propostas', PropostaController.adicionaPropostaIndividual);
};
