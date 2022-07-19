const express = require('express');

const app = express();

const investimentosRoutes = require('./routers/investimentosRoutes');
const ativoRoutes = require('./routers/ativoRoutes');
const contaRoutes = require('./routers/contaRoutes');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/investimentos', investimentosRoutes);
app.use('/ativos', ativoRoutes);
app.use('/conta', contaRoutes);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
