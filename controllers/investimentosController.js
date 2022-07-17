const investimentosService = require('../services/investimentosService');

const comprar = async (req, res) => {
  const novaCompra = await investimentosService.comprar(req.body);

  if (!novaCompra) {
    return res.status(404).json({ message: 'Desculpe, a corretora não possui essa quantidade do ativo' });
  }

  return res.status(201).json(novaCompra);
};

const vender = async (req, res) => {
  const novaVenda = await investimentosService.vender(req.body);

  return res.status(201).json(novaVenda);
};

module.exports = {
  comprar,
  vender,
};