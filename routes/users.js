var express = require('express');
var router = express.Router();
var msgHandler = require('../service/msgHandler');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let userId = req.query.id;
  let list = msgHandler.history.sort((a, b) => b.score - a.score );
  let place = list.findIndex(e => e.id.toString() === userId)
  let respone = {
    code: 0,
    msg: 'success',
    data: {place:  place >= -1 ? place + 1: 0}
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(respone));
});
router.get('/history', function(req, res, next) {
  let userId = req.query.id;
  if (userId){
    msgHandler.clearHistory(userId)
  }
  let respone = {
    code: 0,
    msg: 'success'
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(respone));
});
module.exports = router;
