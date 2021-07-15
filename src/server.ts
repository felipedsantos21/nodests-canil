import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

// Configurando as variaveis de ambiente
dotenv.config();

// Iniciando o express
const server = express();

// Configurando o mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Configurando a pasta publica do sistema
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, res) => {
  res.send('Página não encontrada!');
});

// Rodando o Servidor
server.listen(process.env.PORT);