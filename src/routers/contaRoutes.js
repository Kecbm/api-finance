const express = require('express');

const router = express.Router();

const contaController = require('../controllers/contaController');
const { validateValor } = require('../middlewares/validateConta');
const { validateCodCliente } = require('../middlewares/validateInvestimentos');
const { validateLogin } = require('../middlewares/validateLogin');
const { validateCodAtivo } = require('../middlewares/validateAtivo');
const { validateToken } = require('../middlewares/validateToken');

router.post('/deposito', validateValor, validateCodCliente, validateToken, contaController.deposito);
router.post('/saque', validateValor, validateCodCliente, validateToken, contaController.saque);
router.get('/:id', validateToken, contaController.saldo);
router.post('/login', validateLogin, contaController.login);
router.post('/carteira/:id', validateCodAtivo, validateToken, contaController.carteira);
router.get('/cliente/:id', validateToken, contaController.getByClient);

module.exports = router;