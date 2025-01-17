import Fastify from 'fastify';
import sequelize from './config/database';
import { PropostaRoutes } from './routes/proposta_routes';

const app = Fastify();

// Registrar as rotas
app.register(PropostaRoutes);

// Inicializar o banco de dados e o servidor
const start = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Banco de dados sincronizado');
    
    await app.listen({ port: 3000 });
    console.log('Servidor rodando em http://localhost:3000');
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
};

start();

