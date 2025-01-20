import { UsuarioRepository } from "../repositorys/usuario_repository";
import { RequestBody, UsuarioTypes } from "../interfaces";

const usuario_repo = new UsuarioRepository({});

export class UsuarioService {

  static async createLote(dados: RequestBody<UsuarioTypes>) {
    return usuario_repo.createLote(dados); 
  }

  static async getUsuarios() {
    return usuario_repo.getUsuarios();
  }
}


