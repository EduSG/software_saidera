
import { FastifyInstance } from 'fastify';
import { UsuarioController } from '../controllers/controller_usuario';
import { PropostaController } from '../controllers/controller_proposta';
import { ClienteController } from '../controllers/controller_cliente';
import { FornecedorController } from '../controllers/controller_fornecedor';

export const AllRoutes = async (app: FastifyInstance) => {
  app.post('/propostas_lotes', PropostaController.adicionaPropostaLote);
  app.get('/propostas', PropostaController.buscaTodasPropostas);

  app.post('/usuarios_lotes', UsuarioController.adicionaUsuarioLote);
  app.get('/usuarios', UsuarioController.getUsuarios);
  
  app.post('/cliente_lotes', ClienteController.adicionaClienteLote);
  app.get('/cliente', ClienteController.getClientes)

  app.post('/fornecedor_lotes', FornecedorController.adicionaFornecedorLote);
  app.get('/fornecedor', FornecedorController.getFornecedores)
};

