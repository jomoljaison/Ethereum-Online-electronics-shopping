var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    web3.eth.getAccounts().then((data1) => {
      res.render('index.ejs',{ data1: data1 });
    })
   
  });
module.exports = router;