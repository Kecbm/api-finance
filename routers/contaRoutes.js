const express = require('express');

const router = express.Router();

const contaController = require('../controllers/contaController');

router.post('/deposito', contaController.deposito);
router.post('/saque', contaController.saque);

module.exports = router;