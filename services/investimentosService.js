const investimentosModel = require('../models/investimentosModel');
const ativoService = require('../services/ativoService');

const comprar = async (body) => {
  const { codAtivo, qtdeAtivo } = body;

  const quantidadeDisponivel = await ativoService.quantity(codAtivo);

  if (quantidadeDisponivel > qtdeAtivo) {
    return;
  }

  const novaCompra = await investimentosModel.comprar(body);

  return novaCompra;
};

module.exports = {
  comprar,
};