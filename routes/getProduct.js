var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    data = req.query;
    console.log(data);
    Samsung.methods.getProduct(data.productid)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            val._productprice = web3.utils.toBN(val._productprice).toString();
            res.render("getProduct", {myData : val});
        })
});

module.exports = router;
