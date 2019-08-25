const express = require('express');

const citiesRouter = require('./cities');

const router = express.Router();

router.get('./cities', citiesRouter);

module.exports = router;