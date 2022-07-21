const connection = require('../../database/db');

const quantity = async (id) => {
  const [quantidadeDoAtivo] = await connection.execute(
    'SELECT qtdeAtivo FROM XPInvestimentos.ativo WHERE codAtivo = ?',
    [id],
  );

  return quantidadeDoAtivo;
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
  getByAssets,
};