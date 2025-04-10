  const express = require('express');
  const router = express.Router();

  const cors = require('cors');
  const app = express();
  const homeRoutes = require('./src/routes/homeRoutes');
  const apiExternaRoutes = require('./src/routes/apiExternaRoutes');

  app.use(cors());
  app.use(express.json());

  app.use('/', homeRoutes);
  app.use('/api-externa', apiExternaRoutes);

  app.listen(3000, () => {
    console.log('Servidor backend rodando em http://localhost:3000');
  });