const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJWT = (user) => {
  const jwtConfig = { expiresIn: '10m', algorithm: 'HS256' };

  const TOKEN_SECRET = process.env.JWT_SECRET;

  return jwt.sign({ user }, TOKEN_SECRET, jwtConfig);
};

module.exports = generateJWT; 