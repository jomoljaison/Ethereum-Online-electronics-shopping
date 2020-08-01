var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    data = req.body;
    console.log(data);
    Samsung.methods.addproducts(data.productid,data.productname,data.productheight,data.productwidth,data.productwarranty,data.productothers,data.productprice) .send({ from: coinbase, gas : 6000000 });
    res.render("view")
});

module.exports = router;
