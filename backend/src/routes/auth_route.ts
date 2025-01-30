import { Router } from 'express';
import { AuthController } from '../utils/auto_controller';
// Cria uma instância do Router do Express
export const AuthRoutes = Router();

// Rotas para Proposta
AuthRoutes.post('/login', AuthController.Auth_Check);
AuthRoutes.get('/login/:token', AuthController.Decode)
