const express = require('express');

const router = express.Router();

const ativoController = require('../controllers/ativoController');

router.get('/quantidade/:id', ativoController.quantity);
router.get('/cliente/:id', ativoController.getByClient);
router.get('/:id', ativoController.getByAssets);

module.exports = router;