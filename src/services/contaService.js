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

const login = async (body) => {
  const token = await contaModel.login(body);
  
  return token;
};

const carteira = async (id, codAtivo) => {
  const quantidade = await contaModel.carteira(id, codAtivo);

  return quantidade;
};

const getByClient = async (id) => {
  const client = await contaModel.getByClient(id);

  return client;
};

module.exports = {
  deposito,
  saque,
  saldo,
  login,
  carteira,
  getByClient,
};