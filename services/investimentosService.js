const investimentosModel = require('../models/investimentosModel');
const ativoService = require('../services/ativoService');

const comprar = async (body) => {
  const { codAtivo, qtdeAtivo } = body;

  const [quantidadeDisponivel] = await ativoService.quantity(codAtivo);

  if (qtdeAtivo > quantidadeDisponivel.qtdeAtivo) {
    return;
  }

  const novaCompra = await investimentosModel.comprar(body);

  return novaCompra;
};

const vender = async (body) => {
  const { codAtivo, qtdeAtivo, codCliente } = body;

  const [quantidadeCarteira] = await ativoService.carteira(codCliente, codAtivo);

  if (qtdeAtivo > quantidadeCarteira.qtdeAtivo) {
    return;
  }

  const novaVenda = await investimentosModel.vender(body);

  return novaVenda;
};

module.exports = {
  comprar,
  vender,
};