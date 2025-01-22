import Clientes from "../models/cliente.model";
import { RequestBody, ClienteTypes } from "../interfaces";

export class ClienteRepository {
  public clientes: RequestBody<ClienteTypes> = {};

  constructor(clientes: RequestBody<ClienteTypes>) {
    this.clientes = clientes;
  }

  public async getClientes(): Promise<ClienteTypes[]> {
    try {
      const clientes = await Clientes.findAll();
      return clientes.map((cliente: any) => cliente.toJSON()) as ClienteTypes[];
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
      throw new Error("Não foi possível adicionar o cliente.");
    }
  }

  public async createLote(dados: RequestBody<ClienteTypes>) {
    console.log("Dados recebidos:", dados);
  
    const clientesData = Object.values(dados).map((cliente: ClienteTypes) => ({
      id: +cliente.id, 
      nome_fantasia: cliente.nome_fantasia,
      razao_social: cliente.razao_social,
      categoria: cliente.categoria || "N/A",
      subcategoria: cliente.subcategoria || "N/A",
      cnpj: cliente.cnpj || "N/A",
      id_vendedor: +cliente.id_vendedor,
    }));
  
    console.log("Dados processados para o banco:", clientesData);
  
    try {
      await Clientes.bulkCreate(clientesData, { validate: true });	
      // const promises = clientesData.map((cliente) => Clientes.create(cliente));
      // await Promise.all(promises);
      console.log("Clientes inseridos com sucesso!");
    } catch (error) {
      console.error("Erro ao inserir clientes:", error);
      throw error;
    }
  
    return;
  }
}
