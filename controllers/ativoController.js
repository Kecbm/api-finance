const ativoService = require('../services/ativoService');

const quantity = async (req, res) => {
  const { id } = req.params;

  const ativo = await ativoService.quantity(Number(id));

  res.status(200).json(...ativo);
};

const carteira = async (req, res) => {
  const { id } = req.params;
  const { codAtivo } = req.body;

  const quantidade = await ativoService.carteira(Number(id), codAtivo);

  res.status(200).json(...quantidade);
};

const getByClient = async (req, res) => {
  const { id } = req.params;

  const client = await ativoService.getByClient(Number(id));

  res.status(200).json(client);
};

module.exports = {
  quantity,
  carteira,
  getByClient,
};