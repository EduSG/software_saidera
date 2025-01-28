import { Request, Response } from "express";
import sqlite3 from "sqlite3";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import path from "path";
import Acesso from "../models/acesso.model";
import { AcessoTypes } from "../interfaces";

export class AcessoRepository {
  public async createAcesso(dados: AcessoTypes): Promise<AcessoTypes> {
    try {
      const acesso = await Acesso.create(dados);
      return acesso.toJSON() as AcessoTypes;
    } catch (err: any) {
      console.error("Erro ao criar usuário:", err);
      throw new Error("Não foi possível criar o acesso!");
    }
  }
i
  public async getAcessoById(id: number): Promise<AcessoTypes | null> {
    try {
      const acesso = await Acesso.findByPk(id);
      return acesso ? (acesso.toJSON() as AcessoTypes) : null;
    } catch (err: any) {
      console.error("Erro ao criar usuário:", err);
      throw new Error("Não foi possível criar o acesso!");
    }
  }

  public async getAcessos(): Promise<AcessoTypes[]> {
    try {
      const acessos = await Acesso.findAll();
      return acessos.map((acesso: any) => acesso.toJSON()) as AcessoTypes[]
    } catch (err: any) {
      console.error("Erro ao buscar acessos:", err);
      throw new Error("Não foi possível buscar os acessos.");
    }
  }

  public async updateAcesso(id: number, dados: Partial<AcessoTypes>): Promise<AcessoTypes | null>{
    try{
      const [ affectedRows ] = await Acesso.update(dados, { where: {id} })

      if(affectedRows > 0){
        const acesso = await Acesso.findByPk(id)
        return  acesso ? acesso.toJSON() as AcessoTypes : null;
      }

      return null
    }catch(err: any){
      console.error("Erro ao atualizar acesso", err);
      throw new Error("Não foi possível atualizar os acessos");
    }
  }

  public async deleteAcessos(id: number): Promise<boolean>{
    try{
      const deletedAcesso = await Acesso.destroy({ where: {id} })
      return deletedAcesso > 0;
    }catch(err: any){
      console.log("Erro ao deletar acesso", err);
      throw new Error("Não foi possível deletar o acesso")
    }
  }
}
