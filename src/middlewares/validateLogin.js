const validateLogin = async (req, res, next) => {
  const { emailCliente, senhaCliente } = req.body;

  if (!emailCliente) {
    return res.status(400).json({ message: '"emailCliente" é necessário' });
  }

  if (!senhaCliente) {
    return res.status(400).json({ message: '"senhaCliente" é necessário' });
  }
  
  next();
};

module.exports = {
  validateLogin,
};