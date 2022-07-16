const ativoService = require('../services/ativoService');

const quantity = async (req, res) => {
    const { id } = req.params;

    const ativo = await ativoService.quantity(Number(id));

    res.status(200).json(...ativo);
};

module.exports = {
  quantity,
};