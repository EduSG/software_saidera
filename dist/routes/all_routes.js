"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRoutes = void 0;
const controller_usuario_1 = require("../controllers/controller_usuario");
const controller_proposta_1 = require("../controllers/controller_proposta");
const controller_cliente_1 = require("../controllers/controller_cliente");
const controller_fornecedor_1 = require("../controllers/controller_fornecedor");
const AllRoutes = async (app) => {
    app.post('/propostas_lotes', controller_proposta_1.PropostaController.adicionaPropostaLote);
    app.get('/propostas', controller_proposta_1.PropostaController.buscaTodasPropostas);
    app.post('/usuarios_lotes', controller_usuario_1.UsuarioController.adicionaUsuarioLote);
    app.get('/usuarios', controller_usuario_1.UsuarioController.getUsuarios);
    app.post('/cliente_lotes', controller_cliente_1.ClienteController.adicionaClienteLote);
    app.get('/cliente', controller_cliente_1.ClienteController.getClientes);
    app.post('/fornecedor_lotes', controller_fornecedor_1.FornecedorController.adicionaFornecedorLote);
    app.get('/fornecedor', controller_fornecedor_1.FornecedorController.getFornecedores);
};
exports.AllRoutes = AllRoutes;
