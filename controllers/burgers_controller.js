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
router.get('/api/burgers', async function(req, res) {
  try {
    const burgers = await Burger.selectAll();
    res.status(200).json({data: burgers});
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;