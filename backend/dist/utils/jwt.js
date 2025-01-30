"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = 'BELLEEPOQUEJOGADAS'; // Use uma chave segura em produção
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({
        id: user.id,
        nome: user.nome,
        role: user.role,
        id_filemaker: user.id_filemaker,
    }, SECRET_KEY, { expiresIn: '2 weeks' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, SECRET_KEY);
};
exports.verifyToken = verifyToken;
