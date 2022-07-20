const investimentosService = require('../services/investimentosService');

const comprar = async (req, res) => {
  const novaCompra = await investimentosService.comprar(req.body);

  if (!novaCompra) {
    return res.status(422).json({ message: 'Desculpe, a corretora não possui essa quantidade do ativo' });
  }

  return res.status(201).json(novaCompra);
};

const vender = async (req, res) => {
  const novaVenda = await investimentosService.vender(req.body);

  if (!novaVenda) {
    return res.status(422).json({ message: 'Sua carteira não possui essa essa quantidade do ativo. Verifique a quantidade disponível em sua carteira e tente novamente' });
  }

  return res.status(201).json(novaVenda);
};

module.exports = {
  comprar,
  vender,
};