  const express = require('express');
  const router = express.Router();

  const cors = require('cors');
  const app = express();

  const routes = require('./src/routes')

  app.use(cors());
  app.use(express.json());

  app.use(routes)

  app.listen(3000, () => {
    console.log('Servidor backend rodando em http://localhost:3000');
  });