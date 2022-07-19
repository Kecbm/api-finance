const contaService = require('../services/contaService');

const deposito = async (req, res) => {
  const { codCliente, valor } = req.body;

  const valorDepositado = await contaService.deposito(codCliente, valor);

  if (!valorDepositado) {
    return res.status(404).json({ message: 'O valor a ser depositado não pode ser negativo ou igual a zero' });
  }

  return res.status(200).json(valorDepositado);
};

module.exports = {
  deposito,
};