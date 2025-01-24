import { RequestBody, UsuarioTypes } from "../interfaces";
import Usuarios from "../models/usuario.model";

export class UsuarioRepository {
  public usuarios: RequestBody<UsuarioTypes> = {};

  constructor(usuarios: RequestBody<UsuarioTypes>) {
    this.usuarios = usuarios;
  }

  // Método para buscar todos os usuários
  public async getUsuarios(): Promise<UsuarioTypes[]> {
    try {
      const usuarios = await Usuarios.findAll();
      return usuarios.map((usuario: any) => usuario.toJSON()) as UsuarioTypes[];
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      throw new Error("Não foi possível buscar os usuários.");
    }
  }

  // Método para buscar um usuário pelo ID
  public async getUsuarioById(id: number): Promise<UsuarioTypes | null> {
    try {
      const usuario = await Usuarios.findByPk(id);
      return usuario ? (usuario.toJSON() as UsuarioTypes) : null;
    } catch (error) {
      console.error("Erro ao buscar usuário por ID:", error);
      throw new Error("Não foi possível buscar o usuário.");
    }
  }

  // Método para criar um usuário
  public async createUsuario(usuarioData: UsuarioTypes): Promise<UsuarioTypes> {
    try {
      const usuario = await Usuarios.create(usuarioData);
      return usuario.toJSON() as UsuarioTypes;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw new Error("Não foi possível criar o usuário.");
    }
  }

  // Método para atualizar um usuário
  public async updateUsuario(id: number, usuarioData: Partial<UsuarioTypes>): Promise<UsuarioTypes | null> {
    try {
      const [affectedRows] = await Usuarios.update(usuarioData, {
        where: { id },
      });

      if (affectedRows > 0) {
        const usuarioAtualizado = await Usuarios.findByPk(id);
        return usuarioAtualizado ? (usuarioAtualizado.toJSON() as UsuarioTypes) : null;
      }

      return null;
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      throw new Error("Não foi possível atualizar o usuário.");
    }
  }

  // Método para deletar um usuário
  public async deleteUsuario(id: number): Promise<boolean> {
    try {
      const affectedRows = await Usuarios.destroy({ where: { id } });
      return affectedRows > 0;
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      throw new Error("Não foi possível deletar o usuário.");
    }
  }

  // Método para criar usuários em lote
  public async createLote(dados: RequestBody<UsuarioTypes>) {
    try {
      const promises = Object.values(dados).map((usuario) =>
        Usuarios.create(usuario)
      );
      await Promise.all(promises);
      console.log("Usuários inseridos com sucesso!");
    } catch (error) {
      console.error("Erro ao inserir usuários em lote:", error);
      throw error;
    }
  }
}
