const connection = require('../db');

const quantity = async (id) => {
  const [quantidadeDoAtivo] = await connection.execute(
    'SELECT qtdeAtivo FROM XPInvestimentos.ativo where codAtivo = ?',
    [id],
  );

  return quantidadeDoAtivo;
};

module.exports = {
  quantity,
};