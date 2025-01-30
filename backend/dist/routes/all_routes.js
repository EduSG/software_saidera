"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRoutes = void 0;
const express_1 = require("express");
const controller_usuario_1 = require("../controllers/controller_usuario");
const controller_proposta_1 = require("../controllers/controller_proposta");
const controller_cliente_1 = require("../controllers/controller_cliente");
const controller_fornecedor_1 = require("../controllers/controller_fornecedor");
const acesso_controller_1 = require("../controllers/acesso_controller");
const controller_produto_lead_1 = require("../controllers/controller_produto_lead");
const controller_produto_proposta_1 = require("../controllers/controller_produto_proposta");
// Cria uma instância do Router do Express
exports.AllRoutes = (0, express_1.Router)();
// Rotas para Proposta
exports.AllRoutes.post('/propostas_lotes', controller_proposta_1.PropostaController.adicionaPropostaLote);
exports.AllRoutes.get('/propostas', controller_proposta_1.PropostaController.buscaTodasPropostas);
// Rotas para Usuário
exports.AllRoutes.post('/usuarios_lotes', controller_usuario_1.UsuarioController.adicionaUsuarioLote);
exports.AllRoutes.get('/usuarios', controller_usuario_1.UsuarioController.getUsuarios);
// Rotas para Cliente
exports.AllRoutes.post('/cliente_lotes', controller_cliente_1.ClienteController.adicionaClienteLote);
exports.AllRoutes.get('/cliente', controller_cliente_1.ClienteController.getClientes);
// Rotas para Fornecedor
exports.AllRoutes.post('/fornecedor_lotes', controller_fornecedor_1.FornecedorController.adicionaFornecedorLote);
exports.AllRoutes.get('/fornecedor', controller_fornecedor_1.FornecedorController.getFornecedores);
exports.AllRoutes.post('produto_lead_lotes', controller_produto_lead_1.ProdutoLeadController.adicionarProdutoLeadLote);
exports.AllRoutes.get('produto_lead', controller_produto_lead_1.ProdutoLeadController.getProdutoLead);
exports.AllRoutes.post("produto_proposta_lotes", controller_produto_proposta_1.ProdutoPropostaController.adicionarProdutoPropostaLote);
exports.AllRoutes.get("produto_proposta", controller_produto_proposta_1.ProdutoPropostaController.getProdutoProposta);
exports.AllRoutes.post('/acesso', acesso_controller_1.AcessoController.adicionaAcesso);
exports.AllRoutes.get('/acesso', acesso_controller_1.AcessoController.getAcessos);
