const express = require('express');
const Burger = require('../models/burger');

const router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/index');
});

module.exports = router;