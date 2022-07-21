const express = require('express');

const router = express.Router();

const investimentosControllers = require('../controllers/investimentosController');
const {validateCodAtivo } = require('../middlewares/validateAtivo');
const { validateQtdeAtivo, validateCodCliente } = require('../middlewares/validateInvestimentos');

router.post('/comprar', validateCodAtivo, validateQtdeAtivo, validateCodCliente, investimentosControllers.comprar);
router.post('/vender', validateCodAtivo, validateQtdeAtivo, validateCodCliente, investimentosControllers.vender);

module.exports = router;