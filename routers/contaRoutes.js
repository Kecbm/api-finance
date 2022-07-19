const express = require('express');

const router = express.Router();

const contaController = require('../controllers/contaController');

router.get('/deposito', contaController.deposito);

module.exports = router;