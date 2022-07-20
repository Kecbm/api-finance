const validateBody= (req, res, next) => {
  const { codCliente, valor } = req.body;

  if (!codCliente) {
    return res.status(400).json({ message: '"codCliente" é necessário' });
  }

  if (!valor) {
    return res.status(400).json({ message: '"valor" é necessário' });
  }

  if (codCliente < 0) {
    return res.status(422).json({ message: '"codCliente" deve ser maior que zero' });
  }

  next();
};

module.exports = {
  validateBody,
};