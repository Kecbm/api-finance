const connection = require('../db');

const comprar = async (body) => {
  const { codCliente, codAtivo, qtdeAtivo } = body;

  await connection.execute(
    'INSERT INTO XPInvestimentos.comprar (codCliente, codAtivo, qtdeAtivo) VALUES (?, ?, ?)',
    [codCliente, codAtivo, qtdeAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.ativo SET qtdeAtivo = qtdeAtivo - ${qtdeAtivo} WHERE codAtivo = ?`,
    [codAtivo],
  );

  return `Parabéns cliente ${codCliente}, você acabou de comprar ${qtdeAtivo} unidades da ação ${codAtivo}`;
};

module.exports = {
  comprar,
};