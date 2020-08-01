
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    Samsung.getPastEvents('addproduct',{
        fromBlock:0 ,
        toBlock:'latest'
    },(err,events)=>{
        console.log("addproduct events",events)
        eventArr=[];
        for (var i = 0; i <= (events.length - 1); i++) {
            events[i];
eventArr.push({id:i,transactionhash: events[i].transactionHash,blocknumber:events[i].blockNumber,name: events[i].returnValues[0],height: events[i].returnValues[1],width: events[i].returnValues[2],warranty: events[i].returnValues[3],others: events[i].returnValues[4], price: web3.utils.fromWei(web3.utils.toBN(events[i].returnValues[5]), 'ether'),owner: events[i].returnValues[6] });
if(eventArr.length == events.length)
res.render("event",{eventArray:eventArr})

            }
        });
  
});

module.exports = router;

