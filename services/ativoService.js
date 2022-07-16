const ativoModel = require('../models/ativoModel');

const quantity = async (id) => {
  const ativo = await ativoModel.quantity(id);

  return ativo;
};

module.exports = {
  quantity,
};