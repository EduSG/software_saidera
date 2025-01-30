import jwt from 'jsonwebtoken';

const SECRET_KEY = 'BELLEEPOQUEJOGADAS'; // Use uma chave segura em produção

interface TokenPayload {
  id: number;
  nome: string;
  role: number;
  id_filemaker: number;
}

export const generateToken = (user: TokenPayload): string => {
  return jwt.sign(
    {
      id: user.id,
      nome: user.nome,
      role: user.role,
      id_filemaker: user.id_filemaker,
    },
    SECRET_KEY,
    { expiresIn: '2 weeks' }
  );
};

export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, SECRET_KEY) as TokenPayload;
};
