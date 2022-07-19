const contaService = require('../services/contaService');

const deposito = async (req, res) => {
  const { codCliente, valor } = req.body;

  const valorDepositado = await contaService.deposito(codCliente, valor);

  res.status(200).json(valorDepositado);
};

module.exports = {
  deposito,
};