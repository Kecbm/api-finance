const express = require('express');

const router = express.Router();

const investimentosControllers = require('../controllers/investimentosController');
const {validateCodAtivo } = require('../middlewares/validateAtivo');
const { validateQtdeAtivo, validateCodCliente } = require('../middlewares/validateInvestimentos');
const { validateToken } = require('../middlewares/validateToken');

router.post('/comprar', validateCodAtivo, validateQtdeAtivo, validateCodCliente, validateToken, investimentosControllers.comprar);
router.post('/vender', validateCodAtivo, validateQtdeAtivo, validateCodCliente, validateToken, investimentosControllers.vender);

module.exports = router;