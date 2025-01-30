"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("./jwt");
const acesso_model_1 = __importDefault(require("../models/acesso.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    static async Decode(req, res) {
        const { token } = req.params;
        try {
            const decoded = jsonwebtoken_1.default.decode(token);
            res.status(200).send(decoded);
            return;
        }
        catch (error) {
            console.error("Erro ao decodificar o token:", error);
            res.status(400).send("cabou");
            return;
        }
    }
    static async Auth_Check(req, res) {
        const { email, password } = req.body; // Use o campo "password" enviado no body
        console.log("Dados recebidos:", req.body);
        try {
            // Busca o usuário pelo e-mail
            const user = await acesso_model_1.default.findOne({ where: { email } });
            console.log("Usuário encontrado:", user);
            if (!user) {
                console.log("Usuário não encontrado");
                res.status(401).json({ message: "Credenciais inválidas" });
                return;
            }
            // Compara a senha fornecida com a senha criptografada no banco de dados
            const senhaValida = bcryptjs_1.default.compareSync(password, user.senha);
            console.log("Senha válida:", senhaValida);
            if (!senhaValida) {
                console.log("Senha inválida");
                res.status(401).json({ message: "Credenciais inválidas" });
                return;
            }
            // Gera o token JWT
            const token = (0, jwt_1.generateToken)({
                id: user.id,
                nome: user.nome,
                role: user.role_id,
                id_filemaker: user.id_filemaker,
            });
            console.log("Token gerado:", token);
            // Retorna o token
            res.json({ token });
        }
        catch (error) {
            console.error("Erro no servidor:", error);
            res.status(500).json({ message: "Erro no servidor" });
        }
    }
}
exports.AuthController = AuthController;
