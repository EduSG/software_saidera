
import { Router } from 'express';
import { UsuarioController } from '../controllers/controller_usuario';
import { PropostaController } from '../controllers/controller_proposta';
import { ClienteController } from '../controllers/controller_cliente';
import { FornecedorController } from '../controllers/controller_fornecedor';
import { AcessoController } from '../controllers/acesso_controller';
import { ProdutoLeadController } from '../controllers/controller_produto_lead';
import { ProdutoPropostaController } from '../controllers/controller_produto_proposta';
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

AllRoutes.post('produto_lead_lotes', ProdutoLeadController.adicionarProdutoLeadLote);
AllRoutes.get('produto_lead', ProdutoLeadController.getProdutoLead);

AllRoutes.post("produto_proposta_lotes", ProdutoPropostaController.adicionarProdutoPropostaLote)
AllRoutes.get("produto_proposta", ProdutoPropostaController.getProdutoProposta)

AllRoutes.post('/acesso', AcessoController.adicionaAcesso);
AllRoutes.get('/acesso', AcessoController.getAcessos);
