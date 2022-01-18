var express = require('express');
var router = express.Router();

const hi = () => 'hi';
/* GET users listing. */
router.get('/custom', function(req, res, next) {
  res.send(hi());
});

module.exports = router;
