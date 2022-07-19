const contaService = require('../services/contaService');

const deposito = async (req, res) => {
  const { codCliente, valor } = req.body;

  const valorDepositado = await contaService.deposito(codCliente, valor);

  if (!valorDepositado) {
    return res.status(404).json({ message: 'O valor a ser depositado não pode ser negativo ou igual a zero' });
  }

  return res.status(200).json(valorDepositado);
};

const saque = async (req, res) => {
  const { codCliente, valor } = req.body;

  const valorDoSaque = await contaService.saque(codCliente, valor);

  if (!valorDoSaque) {
    return res.status(404).json({ message: 'O valor a ser sacado não pode ser maior que o saldo disponível, negativo ou igual a zero' });
  }

  return res.status(200).json(valorDoSaque);
};

module.exports = {
  deposito,
  saque
};