const Samsung = artifacts.require("Samsung");

contract("Samsung", async accounts=> {
  it("student details added", async() => {

  samsungs = await Samsung.deployed();

  productid= 1;
  productname="watch";
  productheight="3cm";
  productwidth="10cm";
  productwarranty="3years";
  productothers="black silver";
  productprice= 550;
  try{
    await samsungs.addproducts(productid,productname,productheight,productwidth,productwarranty,productothers,productprice);
    productaddeddetails=await samsungs.getProduct(productid);
    console.log("productaddeddetails",productaddeddetails);
    assert.equal(productaddeddetails[0],productname,"name failed");
    assert.equal(productaddeddetails[1],productheight,"productheight failed");
    assert.equal(productaddeddetails[2],productwidth,"productwidth failed");
    assert.equal(productaddeddetails[3],productwarranty,"productwarranty failed");
    assert.equal(productaddeddetails[4],productothers,"productothers failed");
    assert.equal(productaddeddetails[5],productprice,"productprice failed");

  }
  catch(err){
    assert(err);
    console.log(err);
  }
  });

  it("Buy product",async()=>{
    samsungs = await Samsung.deployed();
   console.log("deployed samsungs",samsungs);

    buyerAddress= accounts[1];
    samsungsAddress= await samsungs.address;
    contractBalance= await web3.eth.getBalance(samsungsAddress);
    console.log("Contract Balance",contractBalance);
    productid= 1;
    amt =3;
    try{
      await samsungs.buyproducts(productid,{from:buyerAddress, value:web3.utils.toWei(amt.toString(),'ether')});
      CurrentContractBalance= await web3.eth.getBalance(samsungsAddress);
      console.log("CurrentContractBalance",CurrentContractBalance);
      Difference= CurrentContractBalance-contractBalance;
      DifferenceInEther=await web3.utils.fromWei(Difference.toString(),"ether");
      console.log("Difference",DifferenceInEther);
      assert.equal(DifferenceInEther,amt,"Buy product fail"); 
    }
    catch(err){
      assert(err); 
      console.log(err);
    }

  })
});