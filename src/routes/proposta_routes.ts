import { FastifyInstance } from 'fastify';
import { PropostaController } from '../controllers/controller_proposta';

export const PropostaRoutes = async (app: FastifyInstance) => {
  app.post('/propostas_lotes', PropostaController.adicionaPropostaLote)
  app.get('/propostas', PropostaController.buscaTodasPropostas);
};
