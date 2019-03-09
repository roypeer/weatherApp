var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/data', function(req, res, next) {
  res.json({'Temp':30, 'Humid': 60});
});

module.exports = router;
