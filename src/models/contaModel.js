const connection = require('../../database/db/');
const generateJWT = require('../utils/generateJWT');

const deposito = async (codCliente, valor) => {
  const [deposito] = await connection.execute(
    'INSERT INTO XPInvestimentos.deposito (codCliente, valor) VALUES (?, ?)',
    [codCliente, valor],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel + ${valor} WHERE codCliente = ?`,
    [codCliente],
  );

  return {
    id: deposito.insertId,
    codCliente,
    valor,
  };
};

const saque = async (codCliente, valor) => {
  const [saldoDisponivel] = await connection.execute(
    'SELECT saldoDisponivel FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [codCliente],
  );

  if(Number(valor) > Number(saldoDisponivel[0].saldoDisponivel)) {
    return;
  }

  const [saque] = await connection.execute(
    'INSERT INTO XPInvestimentos.saque (codCliente, valor) VALUES (?, ?)',
    [codCliente, valor],
  );

  await connection.execute(
    `UPDATE XPInvestimentos.cliente SET saldoDisponivel = saldoDisponivel - ${valor} WHERE codCliente = ?`,
    [codCliente],
  );

  return {
    id: saque.insertId,
    codCliente,
    valor,
  };;
};

const saldo = async (id) => {
  const [saldoCliente] = await connection.execute(
    'SELECT saldoDisponivel FROM XPInvestimentos.cliente WHERE codCliente = ?',
    [id],
  );

  return {
    CodCliente: id,
    Saldo: Number(saldoCliente[0].saldoDisponivel),
  };
};

const login = async (body) => {
  const { emailCliente, senhaCliente } = body;

  const [cliente] = await connection.execute(
    'SELECT emailCliente, senhaCliente FROM XPInvestimentos.cliente WHERE emailCliente = ? AND senhaCliente = ?',
    [emailCliente, senhaCliente],
  );

  if (cliente.length === 0) {
    return;
  }

  return generateJWT(cliente[0]);
};

const carteira = async (id, codAtivo) => {
  const [quantidade] = await connection.execute(
    'SELECT qtdeAtivo FROM XPInvestimentos.carteira WHERE codCliente = ? AND codAtivo = ?',
    [id, codAtivo],
  );

  return quantidade;
};

const getByClient = async (id) => {
  const arrayStocks = [];

  const [allStocks] = await connection.execute(
      'SELECT COUNT(*) AS totalAtivo FROM XPInvestimentos.ativo;',
  );

  const stop = allStocks[0].totalAtivo + 1;

  for (let i = 1; i < stop; i += 1) {
    const [qtdeAtivo] = await connection.execute(
      'SELECT qtdeAtivo FROM XPInvestimentos.carteira WHERE codCliente = ? AND codAtivo = ?',
      [id, i],
    );
  
    const [valorAtivo] = await connection.execute(
      'SELECT valor FROM XPInvestimentos.ativo WHERE codAtivo = ?',
      [i],
    );
  
    const objWallet = {
      CodCliente: id,
      CodAtivo: i,
      QtdeAtivo: qtdeAtivo[0].qtdeAtivo,
      Valor: Number(valorAtivo[0].valor),
    };
  
    arrayStocks.push(objWallet);
  }

  return arrayStocks;
};

module.exports = {
  deposito,
  saque,
  saldo,
  login,
  carteira,
  getByClient,
};