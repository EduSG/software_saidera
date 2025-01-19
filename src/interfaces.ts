export interface ProdutosProposta {
  id_fabricante: number | null;
  valor: number | null;
  quantidade: number | null;
  valor_total: number | null;
}

export interface RequestBody<T> {
  [key: string]: T,
}

export interface PropostaAttributes {
  id: number;
  data_proposta: Date | null;
  empresa: number | null;
  id_usuario: number | null;
  id_lead: number | null;
  id_cliente: number | null;
  id_fornecedor: number | null;
  produtos_proposta: Record<string, any> | null; 
}

export interface UsuarioTypes {
  id: number | 0;
  nome: string | null;
  id_gestor: number | 0;
}

export interface ClienteTypes {
  id: number | 0;
  nome_fantasia: string | "Desconhecido";
  razao_social: string | "Desconhecido";
  categoria: string | "N/A";
  subcategoria: string | "N/A";
  cnpj: string | "N/A";
}

export interface FornecedorTypes {
  id: number | 0;
  nome_fantasia: string | "Desconhecido";
  razao_social: string | "Desconhecido";
  categoria: string | "N/A";
  cnpj: string | "N/A";
}
