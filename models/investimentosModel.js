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

  const [valorAtivo] = await connection.execute(
    'SELECT valor FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [codAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel - ${qtdeAtivo * valorAtivo[0].valor} WHERE codCliente = ?`,
    [codCliente],
  );

  const [nomeCliente] = await connection.execute(
    'SELECT nomeCliente FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [codCliente],
  );

  const [nomeAtivo] = await connection.execute(
    'SELECT nomeAtivo FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [codAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.carteira SET qtdeAtivo = qtdeAtivo + ${qtdeAtivo} WHERE codAtivo = ? AND codCliente = ?`,
    [codAtivo, codCliente],
  );

  return `Olá ${nomeCliente[0].nomeCliente}, você acabou de comprar ${qtdeAtivo} unidades da ação ${nomeAtivo[0].nomeAtivo}`;
};

const vender = async (body) => {
  const { codCliente, codAtivo, qtdeAtivo } = body;

  await connection.execute(
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

  const [nomeCliente] = await connection.execute(
    'SELECT nomeCliente FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [codCliente],
  );

  const [nomeAtivo] = await connection.execute(
    'SELECT nomeAtivo FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [codAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.comprar SET qtdeAtivo = qtdeAtivo - ${qtdeAtivo} WHERE codCliente = ?`,
    [codCliente],
  );

  return `Olá ${nomeCliente[0].nomeCliente}, você acabou de vender ${qtdeAtivo} unidades da ação ${nomeAtivo[0].nomeAtivo}`;
};

module.exports = {
  comprar,
  vender,
};