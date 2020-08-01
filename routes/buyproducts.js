var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    data = req.body;
    console.log(data);
    Samsung.methods.buyproducts(data.productid).send({ from: data.buyer, value: data.amt, gas: 600000 }).then((txn) => {
        res.send(txn)
      });
});

module.exports = router;

