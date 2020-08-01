var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    data = req.body;
    console.log(data);
    Samsung.methods.receiveSeller(data.productid).send({ from: data.buyer, gas: 600000 }).on('transactionHash', (hash) => {

          res.send(hash + "--------------------- Transactionhash of receiveSeller");
         
        }).on('error', (error) => {
          console.log(error.message);
          res.send("error !...........")
      
        });
          
      });
      
      module.exports = router;


// var express = require('express');
// var router = express.Router();

// router.post('/', function (req, res, next) {
//   reqData = req.body;
//   console.log(reqData);
//   address_Current = reqData.buyer;
//   console.log(address_Current)

//  Samsung.methods.receiveSeller().send({ from: address_Current, gas: 1500000 }).on('transactionHash', (hash) => {

//     res.send(hash + "       --------------------- Transactionhash of receiveSeller");
   
//   }).on('error', (error) => {
//     console.log(error.message);
//     res.send("error !...........")

//   });
    
// });

// module.exports = router;


