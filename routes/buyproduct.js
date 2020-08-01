var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    Samsung.getPastEvents('buyproduct',{
        fromBlock:0 ,
        toBlock:'latest'
    },(err,events)=>{
        console.log("buyproduct events",events)
        eventArr=[];
        for (var i = 0; i <= (events.length - 1); i++) {
            events[i];

eventArr.push({id:i,transactionhash: events[i].transactionHash,blocknumber:events[i].blockNumber,productid: events[i].returnValues[0],productname: events[i].returnValues[1],productheight: events[i].returnValues[2],productwidth: events[i].returnValues[3], productprice: web3.utils.fromWei(web3.utils.toBN(events[i].returnValues[4]), 'ether'),productbuyer: events[i].returnValues[5] });
if(eventArr.length == events.length)
res.render("buyproduct",{eventArray:eventArr})

            }
        });
  
});

module.exports = router;
