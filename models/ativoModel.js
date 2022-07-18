const { array } = require('joi');
const connection = require('../db');

const quantity = async (id) => {
  const [quantidadeDoAtivo] = await connection.execute(
    'SELECT qtdeAtivo FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [id],
  );

  return quantidadeDoAtivo;
};

const carteira = async (id, codAtivo) => {
  const [quantidade] = await connection.execute(
    'SELECT qtdeAtivo FROM XPInvestimentos.comprar WHERE codCliente = ? AND codAtivo = ?',
    [id, codAtivo],
  );

  return quantidade;
};

const getByClient = async (id) => {
  const stop = 4;
  const arrayStocks = [];

  for (let i = 1; i < stop; i += 1) {
    const [qtdeAtivo] = await connection.execute(
      'SELECT qtdeAtivo FROM XPInvestimentos.comprar WHERE codCliente = ? AND codAtivo = ?',
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
      Valor: valorAtivo[0].valor,
    };
  
    arrayStocks.push(objWallet);
  }

  return arrayStocks;
};

module.exports = {
  quantity,
  carteira,
  getByClient,
};