const investimentosModel = require('../models/investimentosModel');

const comprar = async (body) => {
  const novaCompra = await investimentosModel.comprar(body);

  return novaCompra;
};

module.exports = {
  comprar,
};