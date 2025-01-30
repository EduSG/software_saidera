import express from 'express';
import sequelize from './config/database';
import { AllRoutes } from './routes/all_routes';
import { AuthRoutes } from './routes/auth_route';
import { permission_route } from './routes/permission_routes';
import defineAssociations from './models/pr_associations';
const cors = require('cors');

// Criar a instância do Express
const app = express();

app.use(cors());

// Configurar o limite de payload para 200 MB
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: true, limit: '200mb' }));

defineAssociations();

// Registrar as rotas
app.use(AllRoutes);
app.use('/permission', permission_route);
app.use(AuthRoutes)
// Função para iniciar o servidor
const start = async () => {
  try {
    // Sincronizar o banco de dados
     await sequelize.sync({ force: false });
    console.log('Banco de dados sincronizado');

    // Iniciar o servidor na porta 3870
    app.listen(3870, '0.0.0.0', () => {
      console.log('Servidor rodando em http://0.0.0.0:3870');
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
};

// Iniciar a aplicação
start();
