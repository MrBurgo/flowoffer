const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendStatus(500);
});

module.exports = router;
