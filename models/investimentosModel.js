const connection = require('../db/index');

const comprar = async (body) => {
  const { codCliente, codAtivo, qtdeAtivo } = body;

  const [novaCompra] = await connection.execute(
    'INSERT INTO XPInvestimentos.comprar (codCliente, codAtivo, qtdeAtivo) VALUES (?, ?, ?);',
    [codCliente, codAtivo, qtdeAtivo],
  );

  return {
    codCliente,
    codAtivo,
    qtdeAtivo
  };
};

module.exports = {
  comprar,
};