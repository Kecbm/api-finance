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

module.exports = {
  quantity,
  carteira,
};