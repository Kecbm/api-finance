const ativoModel = require('../models/ativoModel');

const quantity = async (id) => {
  const ativo = await ativoModel.quantity(id);

  return ativo;
};

const carteira = async (id, codAtivo) => {
  const quantidade = await ativoModel.carteira(id, codAtivo);

  return quantidade;
};

const getByClient = async (id) => {
  const client = await ativoModel.getByClient(id);

  return client;
};

module.exports = {
  quantity,
  carteira,
  getByClient,
};