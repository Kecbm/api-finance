const connection = require('../db');

const comprar = async (body) => {
  const { codCliente, codAtivo, qtdeAtivo } = body;

  await connection.execute(
    'INSERT INTO XPInvestimentos.comprar (codCliente, codAtivo, qtdeAtivo) VALUES (?, ?, ?);',
    [codCliente, codAtivo, qtdeAtivo],
  );

  return `Parabéns cliente ${codCliente}, você acabou de comprar ${qtdeAtivo} unidades da ação ${codAtivo}`;
};

module.exports = {
  comprar,
};