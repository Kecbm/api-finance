const validateValor= (req, res, next) => {
  const { valor } = req.body;

  if (!valor) {
    return res.status(400).json({ message: '"valor" é necessário' });
  }

  next();
};

module.exports = {
  validateValor,
};