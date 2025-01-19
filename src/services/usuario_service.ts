import Usuarios from "../models/usuario.model";
import { RequestBody, UsuarioTypes } from "../interfaces";

export class UsuarioService {
  static async createLote(dados: RequestBody<UsuarioTypes>) {
    
    const promises = Object.values(dados).map((usuario) =>
      Usuarios.create(usuario),
    );
    await Promise.all(promises);

    return;
  }

  static async getUsuarios() {
    return Usuarios.findAll();
  }
}
