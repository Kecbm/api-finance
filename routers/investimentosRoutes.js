const express = require('express');

const router = express.Router();

const investimentosControllers = require('../controllers/investimentosController');

router.post('/comprar', investimentosControllers.comprar);
router.post('/vender', investimentosControllers.vender);

module.exports = router;