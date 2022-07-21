const ativoService = require('../services/ativoService');

const quantity = async (req, res) => {
  const { id } = req.params;

  const ativo = await ativoService.quantity(Number(id));

  res.status(200).json(ativo[0]);
};

const getByAssets = async (req, res) => {
  const { id } = req.params;

  const ativo = await ativoService.getByAssets(Number(id));

  res.status(200).json(ativo[0]);
};

module.exports = {
  quantity,
  getByAssets,
};