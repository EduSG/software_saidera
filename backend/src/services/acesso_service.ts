import { AcessoRepository } from "../repositorys/acesso_repotitory";
import { RequestBody, AcessoTypes } from "../interfaces";
import bcrypt from 'bcryptjs';

const acesso_repo = new AcessoRepository();

export class AcessoService {

  static async createAcesso(dados: AcessoTypes) {
    // Verifica se já existe um acesso com o e-mail fornecido
    const acessoExistente = await acesso_repo.findByEmail(dados.email);
    console.log("esse msm otario",acessoExistente)
    if (acessoExistente !== null && acessoExistente !== undefined) {
      throw new Error('Já existe um acesso com este e-mail.');
    }

    // Criptografa a senha antes de salvar
    const salt = await bcrypt.genSalt(10); // Gera um salt
    const senhaCriptografada = await bcrypt.hash(dados.senha, salt); // Criptografa a senha

    // Substitui a senha original pela senha criptografada
    const dadosComSenhaCriptografada = {
      ...dados,
      senha: senhaCriptografada,
    };

    // Salva no banco de dados
    return acesso_repo.createAcesso(dadosComSenhaCriptografada);
  }

  static async getAcessos() {
    return acesso_repo.getAcessos();
  }

}



