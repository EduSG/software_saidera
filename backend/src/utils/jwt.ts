import jwt from 'jsonwebtoken';

const SECRET_KEY = 'SHIMONADEMAIORDETUDO123LOL'; 

function generateToken(userId: number): string {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
}

function verifyToken(token: string): any {
  return jwt.verify(token, SECRET_KEY);
}

export { generateToken, verifyToken };
