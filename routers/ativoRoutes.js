const express = require('express');

const router = express.Router();

const ativoControllers = require('../controllers/ativoController');

router.get('/quantidade/:id', ativoControllers.quantity);

module.exports = router;