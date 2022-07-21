const express = require('express');

const router = express.Router();

const contaController = require('../controllers/contaController');
const { validateValor } = require('../middlewares/validateConta');
const { validateCodCliente } = require('../middlewares/validateInvestimentos');
const { validateLogin } = require('../middlewares/validateLogin');
const { validateCodAtivo } = require('../middlewares/validateAtivo');

router.post('/deposito', validateValor, validateCodCliente, contaController.deposito);
router.post('/saque', validateValor, validateCodCliente, contaController.saque);
router.get('/:id', contaController.saldo);
router.post('/login', validateLogin, contaController.login);
router.post('/carteira/:id', validateCodAtivo, contaController.carteira);
router.get('/cliente/:id', contaController.getByClient);

module.exports = router;