
import { Router } from 'express';
import { UsuarioController } from '../controllers/controller_usuario';
import { PropostaController } from '../controllers/controller_proposta';
import { ClienteController } from '../controllers/controller_cliente';
import { FornecedorController } from '../controllers/controller_fornecedor';
import { AcessoController } from '../controllers/acesso_controller';

// Cria uma instância do Router do Express
export const AllRoutes = Router();

// Rotas para Proposta
AllRoutes.post('/propostas_lotes', PropostaController.adicionaPropostaLote);
AllRoutes.get('/propostas', PropostaController.buscaTodasPropostas);

// Rotas para Usuário
AllRoutes.post('/usuarios_lotes', UsuarioController.adicionaUsuarioLote);
AllRoutes.get('/usuarios', UsuarioController.getUsuarios);

// Rotas para Cliente
AllRoutes.post('/cliente_lotes', ClienteController.adicionaClienteLote);
AllRoutes.get('/cliente', ClienteController.getClientes);

// Rotas para Fornecedor
AllRoutes.post('/fornecedor_lotes', FornecedorController.adicionaFornecedorLote);
AllRoutes.get('/fornecedor', FornecedorController.getFornecedores);


AllRoutes.post('/acesso', AcessoController.adicionaAcesso);
AllRoutes.get('/acesso', AcessoController.getAcessos);
