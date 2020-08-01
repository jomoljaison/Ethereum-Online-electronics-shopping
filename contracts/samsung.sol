pragma solidity ^0.5.0;

contract Samsung
{
    uint public productCount = 0;
    address public productowner;

    struct attributes
    {     
        uint            productid;
        string          productname;
        string          productheight;
        string          productwidth;
        string          productwarranty;
        string          productothers;
        uint            productprice;
        address         productowner;
        address         productbuyer;
        bool            productpurchased;
    }
    //Mapping 
    mapping(uint =>attributes)productstruct;
  
  //events
   event addproduct(       
     
        string          productname,
        string          productheight,
        string          productwidth,
        string          productwarranty,
        string          productothers,
        uint            productprice,
        address payable productowner,
        bool            productpurchased
        );
 

    event buyproduct(
         uint            productid,
        string          productname,
        string          productheight,
        string          productwidth,
        uint            productprice,
        address         productbuyer

        );
    
  
 constructor() public 
     {
       productowner = msg.sender;

     }

    //Define modifier  
      modifier isOwner
     {
        require(msg.sender == productowner);
        _;
     } 
    
      // Add product details
      function addproducts(uint _productid, string memory _productname, string memory _productheight,string memory _productwidth,string memory _productwarranty,string memory _productothers, uint _productprice )public isOwner  {
        productstruct[_productid].productid = _productid;
        productstruct[_productid].productname = _productname;
        productstruct[_productid].productheight = _productheight;
        productstruct[_productid].productwidth = _productwidth;
        productstruct[_productid].productwarranty = _productwarranty;
        productstruct[_productid].productothers = _productothers;
        productstruct[_productid].productprice = _productprice;
        productstruct[_productid].productowner = msg.sender;

    //event triggering 
        emit addproduct(_productname, _productheight,_productwidth,_productwarranty,_productothers,_productprice, msg.sender, false);
    }
    
    // Get details of product by giving productid
     function getProduct(uint _productid) public view returns (string memory _productname,string memory _productheight,string memory _productwidth,string memory _productwarranty,string memory _productothers,uint _productprice)
     {
        _productname = productstruct[_productid].productname;
        _productheight = productstruct[_productid].productheight;
        _productwidth = productstruct[_productid].productwidth;
        _productwarranty = productstruct[_productid].productwarranty;
        _productothers = productstruct[_productid].productothers;
        _productprice = productstruct[_productid].productprice;
        
     }


    //To pay the amount to the contract by the buyer
   function buyproducts(uint  _productid) public payable {
         msg.sender.transfer(msg.value);
         productstruct[_productid].productbuyer = msg.sender;
         emit buyproduct(productstruct[_productid].productid,productstruct[_productid].productname,productstruct[_productid].productheight,productstruct[_productid].productwidth,productstruct[_productid].productprice, productstruct[_productid].productbuyer);

    }
    
    
    //Get the Buyer Details
    function getBuyer(uint  _productid) public view returns(address _productbuyer){
        _productbuyer = productstruct[_productid].productbuyer;
    }
  
    
    //Receive the amount from the contract to the Productowner
    function receiveSeller(uint _productid) public payable{
        uint _amt=address(this).balance;        
        msg.sender.transfer(_amt);
        productstruct[_productid].productowner = productstruct[_productid].productbuyer;
        
    }
}

