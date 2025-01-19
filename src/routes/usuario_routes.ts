import { FastifyInstance } from 'fastify';
import { UsuarioController } from '../controllers/controller_usuario';

export const PropostaRoutes = async (app: FastifyInstance) => {
  app.post('/usuarios_lotes', UsuarioController.adicionaUsuarioLote)
  app.get('/usuarios', UsuarioController.buscaTodasPropostas);
};

