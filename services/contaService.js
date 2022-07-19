const contaModel = require('../models/contaModel');

const deposito = async (codCliente, valor) => {
  const valorDepositado = await contaModel.deposito(codCliente, valor);

  if (valor === '0' || valor < 0) {
    return;
  }

  return valorDepositado;
};

const saque = async (codCliente, valor) => {
  const valorDoSaque = await contaModel.saque(codCliente, valor);

  if (valor === '0' || valor < 0) {
    return;
  }

  return valorDoSaque;
};

const saldo = async (id) => {
  const saldoCliente = await contaModel.saldo(id);

  return saldoCliente;
};

module.exports = {
  deposito,
  saque,
  saldo,
};