const ativoModel = require('../models/ativoModel');

const quantity = async (id) => {
  const ativo = await ativoModel.quantity(id);

  return ativo;
};

const getByAssets = async (id) => {
  const ativo = await ativoModel.getByAssets(id);

  return ativo;
};

module.exports = {
  quantity,
  getByAssets,
};