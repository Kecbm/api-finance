const express = require('express');

const router = express.Router();

const contaController = require('../controllers/contaController');
const { validateValor } = require('../middlewares/validateConta');
const { validateCodCliente } = require('../middlewares/validateInvestimentos');

router.post('/deposito', validateValor, validateCodCliente, contaController.deposito);
router.post('/saque', validateValor, validateCodCliente, contaController.saque);
router.get('/:id', contaController.saldo);

module.exports = router;