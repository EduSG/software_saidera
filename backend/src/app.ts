import Fastify from 'fastify';
import sequelize from './config/database';
import { AllRoutes } from './routes/all_routes';

// Criar a instância do Fastify com limite de payload ajustado
const app = Fastify({
  bodyLimit: 200 * 1024 * 1024, // 200 MB em bytes
});

app.register(AllRoutes);

const start = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Banco de dados sincronizado');
    
    await app.listen({ port: 3870 });
    console.log('Servidor rodando em http://localhost:3870');
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
};

start();
