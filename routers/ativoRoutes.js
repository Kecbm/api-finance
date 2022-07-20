const express = require('express');

const router = express.Router();

const ativoControllers = require('../controllers/ativoController');
const { validateCodAtivo } = require('../middlewares/validateAtivo');

router.get('/quantidade/:id', ativoControllers.quantity);
router.get('/carteira/:id', validateCodAtivo, ativoControllers.carteira);
router.get('/cliente/:id', ativoControllers.getByClient);
router.get('/:id', ativoControllers.getByAssets);

module.exports = router;