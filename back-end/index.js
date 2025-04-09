const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do desafio está rodando! Use /users para ver os dados. Olá mundo');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Carlos' },
  ]);
});

app.listen(3000, () => {
  console.log('Servidor backend rodando em http://localhost:3000');
});