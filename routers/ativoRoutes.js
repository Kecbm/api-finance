const express = require('express');

const router = express.Router();

const ativoControllers = require('../controllers/ativoController');

router.get('/quantidade/:id', ativoControllers.quantity);
router.get('/carteira/:id', ativoControllers.carteira);
router.get('/cliente/:id', ativoControllers.getByClient);

module.exports = router;