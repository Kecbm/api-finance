const express = require('express');

const router = express.Router();

const contaController = require('../controllers/contaController');

router.post('/deposito', contaController.deposito);
router.post('/saque', contaController.saque);
router.get('/:id', contaController.saldo);

module.exports = router;