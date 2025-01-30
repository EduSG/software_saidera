import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "./jwt";
import Acesso from "../models/acesso.model";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: number;
  nome: string;
  role: string;
  id_filemaker: number;
}

export class AuthController {
  static async Decode(req: Request, res: Response) {
    const { token } = req.params;
    try {
      const decoded = jwt.decode(token) as DecodedToken;
      res.status(200).send(decoded)
      return;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      res.status(400).send("cabou")
      return;
    }
  }

  static async Auth_Check(req: Request, res: Response) {
    const { email, password } = req.body; // Use o campo "password" enviado no body
    console.log("Dados recebidos:", req.body);

    try {
      // Busca o usuário pelo e-mail
      const user = await Acesso.findOne({ where: { email } });
      console.log("Usuário encontrado:", user);

      if (!user) {
        console.log("Usuário não encontrado");
        res.status(401).json({ message: "Credenciais inválidas" });
        return;
      }

      // Compara a senha fornecida com a senha criptografada no banco de dados
      const senhaValida = bcrypt.compareSync(password, user.senha);
      console.log("Senha válida:", senhaValida);

      if (!senhaValida) {
        console.log("Senha inválida");
        res.status(401).json({ message: "Credenciais inválidas" });
        return;
      }

      // Gera o token JWT
      const token = generateToken({
        id: user.id,
        nome: user.nome,
        role: user.role_id,
        id_filemaker: user.id_filemaker,
      });
      console.log("Token gerado:", token);

      // Retorna o token
      res.json({ token });
    } catch (error) {
      console.error("Erro no servidor:", error);
      res.status(500).json({ message: "Erro no servidor" });
    }
  }
}
