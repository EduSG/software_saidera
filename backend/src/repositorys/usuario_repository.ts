import { RequestBody, UsuarioTypes } from "../interfaces";
import Usuarios from "../models/usuario.model";

export class UsuarioRepository {
  public usuarios: RequestBody<UsuarioTypes> = {};

  constructor(usuarios: RequestBody<UsuarioTypes>) {
    this.usuarios = usuarios;
  }

  public async getUsuarios(): Promise<UsuarioTypes[]> {
    try {
      const usuarios = await Usuarios.findAll();
      console.log(usuarios)
      return usuarios.map((usuario: any) => usuario.toJSON()) as UsuarioTypes[];
    } catch (error) {
      console.error("Erro ao adicionar usuario:", error);
      throw new Error("Não foi possível adicionar o usuario.");
    }
  }

  public async createLote(dados: RequestBody<UsuarioTypes>) {
    const promises = Object.values(dados).map((usuario) =>
        Usuarios.create(usuario),
    );
    await Promise.all(promises);

    return;
  }
}

