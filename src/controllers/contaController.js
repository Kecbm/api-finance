const contaService = require('../services/contaService');

const deposito = async (req, res) => {
  const { codCliente, valor } = req.body;

  const valorDepositado = await contaService.deposito(codCliente, valor);

  if (!valorDepositado) {
    return res.status(422).json({ message: 'O valor a ser depositado não pode ser negativo ou igual a zero' });
  }

  return res.status(200).json(valorDepositado);
};

const saque = async (req, res) => {
  const { codCliente, valor } = req.body;

  const valorDoSaque = await contaService.saque(codCliente, valor);

  if (!valorDoSaque) {
    return res.status(422).json({ message: 'O valor a ser sacado não pode ser maior que o saldo disponível, negativo ou igual a zero' });
  }

  return res.status(200).json(valorDoSaque);
};

const saldo = async (req, res) => {
  const { id } = req.params;

  const saldoCliente = await contaService.saldo(Number(id));

  return res.status(200).json(saldoCliente);
};

const login = async (req, res) => {
  const token = await contaService.login(req.body);

  return res.status(200).json({ token });
};

module.exports = {
  deposito,
  saque,
  saldo,
  login,
};