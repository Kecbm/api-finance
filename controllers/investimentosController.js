const investimentosService = require('../services/investimentosService');

const comprar = async (req, res) => {
    const novaCompra = await investimentosService.comprar(req.body);

    return res.status(201).json(novaCompra);
};

module.exports = {
  comprar,
};