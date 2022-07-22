const connection = require('../../database/db');
const { taxaCompra, taxaVenda } = require('../utils/determinaTaxa');

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

  const taxa = taxaCompra(qtdeAtivo, valorAtivo[0].valor);

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel - ${(qtdeAtivo * valorAtivo[0].valor) + taxa} WHERE codCliente = ?`,
    [codCliente],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.carteira SET qtdeAtivo = qtdeAtivo + ${qtdeAtivo} WHERE codAtivo = ? AND codCliente = ?`,
    [codAtivo, codCliente],
  );

  await connection.execute(
    `INSERT INTO XPInvestimentos.corretora (codCliente, operacao, codAtivo, qtdeAtivo , taxa) VALUES (?, ?, ?, ?, ?)`,
    [codCliente, 'compra', codAtivo, qtdeAtivo, taxa],
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

  const taxa = taxaVenda(qtdeAtivo);

  await connection.execute(
    `UPDATE XPInvestimentos.ativo SET qtdeAtivo = qtdeAtivo + ${qtdeAtivo} WHERE codAtivo = ?`,
    [codAtivo],
  );

  const [valorAtivo] = await connection.execute(
    'SELECT valor FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [codAtivo],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel + ${(qtdeAtivo * valorAtivo[0].valor) - taxa} WHERE codCliente = ?`,
    [codCliente],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.carteira SET qtdeAtivo = qtdeAtivo - ${qtdeAtivo} WHERE codAtivo = ? AND codCliente = ?`,
    [codAtivo, codCliente],
  );

  await connection.execute(
    `INSERT INTO XPInvestimentos.corretora (codCliente, operacao, codAtivo, qtdeAtivo , taxa) VALUES (?, ?, ?, ?, ?)`,
    [codCliente, 'venda', codAtivo, qtdeAtivo, taxa],
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