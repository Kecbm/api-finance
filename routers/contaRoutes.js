const express = require('express');

const router = express.Router();

const contaController = require('../controllers/contaController');
const { validateBody } = require('../middlewares/validateConta');

router.post('/deposito', validateBody, contaController.deposito);
router.post('/saque', validateBody, contaController.saque);
router.get('/:id', contaController.saldo);

module.exports = router;