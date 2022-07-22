const connection = require('../../database/db');

const comprar = async (body) => {
  const { codCliente, codAtivo, qtdeAtivo } = body;

  const [compra] = await connection.execute(
    'INSERT INTO XPInvestimentos.comprar (codCliente, codAtivo, qtdeAtivo) VALUES (?, ?, ?)',
    [codCliente, codAtivo, qtdeAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.ativo SET qtdeAtivo = qtdeAtivo - ${qtdeAtivo} WHERE codAtivo = ?`,
    [codAtivo],
  );

  const [valorAtivo] = await connection.execute(
    'SELECT valor FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [codAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel - ${qtdeAtivo * valorAtivo[0].valor} WHERE codCliente = ?`,
    [codCliente],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.carteira SET qtdeAtivo = qtdeAtivo + ${qtdeAtivo} WHERE codAtivo = ? AND codCliente = ?`,
    [codAtivo, codCliente],
  );

  return {
    id: compra.insertId,
    codCliente,
    codAtivo,
    qtdeAtivo,
  };
};

const vender = async (body) => {
  const { codCliente, codAtivo, qtdeAtivo } = body;

  const [venda] = await connection.execute(
    'INSERT INTO XPInvestimentos.vender (codCliente, codAtivo, qtdeAtivo) VALUES (?, ?, ?)',
    [codCliente, codAtivo, qtdeAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.ativo SET qtdeAtivo = qtdeAtivo + ${qtdeAtivo} WHERE codAtivo = ?`,
    [codAtivo],
  );

  const [valorAtivo] = await connection.execute(
    'SELECT valor FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [codAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel + ${qtdeAtivo * valorAtivo[0].valor} WHERE codCliente = ?`,
    [codCliente],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.carteira SET qtdeAtivo = qtdeAtivo - ${qtdeAtivo} WHERE codAtivo = ? AND codCliente = ?`,
    [codAtivo, codCliente],
  );

  return {
    id: venda.insertId,
    codCliente,
    codAtivo,
    qtdeAtivo,
  };
};

module.exports = {
  comprar,
  vender,
};