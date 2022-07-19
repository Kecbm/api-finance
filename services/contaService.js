const contaModel = require('../models/contaModel');

const deposito = async (codCliente, valor) => {
  const valorDepositado = await contaModel.deposito(codCliente, valor);

  if (valor === '0' || valor < 0) {
    return;
  }

  return valorDepositado;
};

module.exports = {
  deposito,
};