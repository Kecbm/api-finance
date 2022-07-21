const validateQtdeAtivo= (req, res, next) => {
  const { qtdeAtivo } = req.body;

  if (!qtdeAtivo) {
    return res.status(400).json({ message: '"qtdeAtivo" é necessário' });
  }

  if (qtdeAtivo < 0) {
    return res.status(422).json({ message: '"qtdeAtivo" deve ser maior que zero' });
  }

  next();
};

const validateCodCliente = (req, res, next) => {
  const { codCliente } = req.body;

  if (!codCliente) {
    return res.status(400).json({ message: '"codCliente" é necessário' });
  }

  if (codCliente < 0) {
    return res.status(422).json({ message: '"codCliente" deve ser maior que zero' });
  }

  next();
};

module.exports = {
  validateQtdeAtivo,
  validateCodCliente,
};