export interface ProdutosLead{
  id_fabricante: number;
  valor: number;
  quantidade: number;
  valor_total: number;
}

export interface ProdutosProposta {
  id_fabricante: number;
  valor: number;
  quantidade: number;
  valor_total: number;
}

export interface ProdutosPedido{
  id_fabricante: number;
  valor: number;
  quantidade: number;
  valor_total: number;
}

export interface RequestBody<T> {
  [key: string]: T,
}

export interface ProdutoPedidoAttributes {
  id: number;
  data_pedido: Date;
  empresa: number;
  id_pedido: number;
  id_vendedor: number;
  id_fornecedor: number;
  id_cliente: number;
  valor_total: number;
  valor_unitario: number;
  quantidade: number;
}

export interface PedidoAttributes {
  id: number;
  data_pedido: string;
  empresa: number;
  id_vendedor: number;
  id_proposta: number;
  id_cliente: number;
}

export interface ProdutoPropostaAttributes {
  id: number;
  data_proposta: Date;
  empresa: number;
  id_proposta: number;
  id_vendedor: number;
  id_fornecedor: number;
  id_cliente: number;
  valor_total: number;
  valor_unitario: number;
  quantidade: number;
}

export interface PropostaAttributes {
  id: number;
  data_proposta: Date;
  empresa: number;
  id_vendedor: number;
  id_lead: number;
  id_cliente: number;
}

export interface ProdutoLeadAttributes {
  id: number;
  data_lead: Date;
  empresa: number;
  id_lead: number;
  id_vendedor: number;
  id_fornecedor: number;
  id_cliente: number;
  valor_total: number;
  valor_unitario: number;
  quantidade: number;
}

export interface LeadAttributes {
  id: number;
  data_lead: Date;
  empresa: number;
  id_usuario: number;
  origem: string;
  id_cliente: number;
  id_fornecedor: number;
}

export interface AcessoTypes {
  id: number;
  nome: string;
  email: string;
  senha: string;
  id_filemaker: number;
  role_id: number;
}

export interface UsuarioTypes {
  id: number | 0;
  nome: string;
  id_gestor: number | 0;
}

export interface ClienteTypes {
  id: number | 0;
  nome_fantasia: string | "Desconhecido";
  razao_social: string | "Desconhecido";
  categoria: string | "N/A";
  subcategoria: string | "N/A";
  cnpj: string | "N/A";
  id_vendedor: number | 0;
}

export interface FornecedorTypes {
  id: number | 0;
  nome_fantasia: string | "Desconhecido";
  razao_social: string | "Desconhecido";
  categoria: string | "N/A";
  id_gestor_produto: number | 145;
  produto_estrategico: boolean;
  cnpj: string | "N/A";
}

