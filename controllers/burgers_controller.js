const express = require('express');
const Burger = require('../models/burger');

const router = express.Router();

//HTML Route
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/index', function(req, res) {
  res.send('Load index page.');
});

//API Routes
module.exports = router;