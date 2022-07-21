const connection = require('../../database/db');

const deposito = async (codCliente, valor) => {
  await connection.execute(
    'INSERT INTO XPInvestimentos.deposito (codCliente, valor) VALUES (?, ?)',
    [codCliente, valor],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel + ${valor} WHERE codCliente = ?`,
    [codCliente],
  );

  const [nomeCliente] = await connection.execute(
    'SELECT nomeCliente FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [codCliente],
  );

  return `Olá ${nomeCliente[0].nomeCliente}, seu deposito de R$ ${valor} foi confirmado e já está disponível em sua conta`;
};

const saque = async (codCliente, valor) => {
  const [saldoDisponivel] = await connection.execute(
    'SELECT saldoDisponivel FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [codCliente],
  );

  if(Number(valor) > Number(saldoDisponivel[0].saldoDisponivel)) {
    return;
  }

  await connection.execute(
    'INSERT INTO XPInvestimentos.saque (codCliente, valor) VALUES (?, ?)',
    [codCliente, valor],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel - ${valor} WHERE codCliente = ?`,
    [codCliente],
  );

  const [nomeCliente] = await connection.execute(
    'SELECT nomeCliente FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [codCliente],
  );

  return `Olá ${nomeCliente[0].nomeCliente}, seu saque de R$ ${valor} foi confirmado e já está disponível em sua conta`;
};

const saldo = async (id) => {
  const [saldoCliente] = await connection.execute(
    'SELECT saldoDisponivel FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [id],
  );

  return {
    CodCliente: id,
    Saldo: saldoCliente[0].saldoDisponivel,
  };
};

module.exports = {
  deposito,
  saque,
  saldo,
};