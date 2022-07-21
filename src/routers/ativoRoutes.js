const express = require('express');

const router = express.Router();

const ativoController = require('../controllers/ativoController');
const { validateToken } = require('../middlewares/validateToken');

router.get('/quantidade/:id', validateToken, ativoController.quantity);
router.get('/:id', validateToken, ativoController.getByAssets);

module.exports = router;