// src/utils/jwt.ts
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: number;
  nome: string;
  role: string;
  id_filemaker: number;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwt.decode(token) as DecodedToken;
    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
};

