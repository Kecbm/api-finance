const validateCodAtivo = (req, res, next) => {
  const { codAtivo } = req.body;

  if (!codAtivo) {
    return res.status(400).json({ message: '"codAtivo" é necessário' });
  }

  if (codAtivo < 0) {
    return res.status(422).json({ message: '"codAtivo" deve ser maior que zero' });
  }

  next();
};

module.exports = {
  validateCodAtivo,
};