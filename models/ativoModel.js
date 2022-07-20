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
      Valor: Number(valorAtivo[0].valor),
    };
  
    arrayStocks.push(objWallet);
  }

  return arrayStocks;
};

const getByAssets = async (id) => {
  const [informacoesAtivo] = await connection.execute(
    'SELECT CodAtivo, QtdeAtivo, Valor FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [id],
  );

  return informacoesAtivo;
};

module.exports = {
  quantity,
  carteira,
  getByClient,
  getByAssets,
};