
import { FastifyInstance } from 'fastify';
import { UsuarioController } from '../controllers/controller_usuario';
import { PropostaController } from '../controllers/controller_proposta';

export const AllRoutes = async (app: FastifyInstance) => {
  app.post('/propostas_lotes', PropostaController.adicionaPropostaLote)
  app.get('/propostas', PropostaController.buscaTodasPropostas);

  app.post('/usuarios_lotes', UsuarioController.adicionaUsuarioLote)
  app.get('/usuarios', UsuarioController.buscaTodasPropostas);
};

