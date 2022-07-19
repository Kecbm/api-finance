const contaModel = require('../models/contaModel');

const deposito = async (codCliente, valor) => {
  const valorDepositado = await contaModel.deposito(codCliente, valor);

  return valorDepositado;
};

module.exports = {
  deposito,
};