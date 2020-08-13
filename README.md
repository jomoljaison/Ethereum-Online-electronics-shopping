****Project name:	Ethereum Samsung****

The dapp Ethereum Samsung that runs on the blockchain. It allows Product owner to list Products for sale, it also allows people to buy product using their  account ether .Whenever someone buy the product, they instantly become the product owner. That’s because this application is  by a smart contract on the blockchain which manages the products. It tracks who owns the product for sale, and it transfers the ownership of the items automatically anytime someone buys them.
Two modules:---
Product Owner:
Product owner can add products with details as Product id,Product name,Product height,Product width,Product Warranty,Other Details,Product price.Product ower can search product uing product id and he can withdraw cash from contarct that pay by buyer.
Product Buyer:
Buyer can buy the available products by giving  product id ,product price and their account balance.


Setting Up:

***Step 1:*** Download the repostory using the command:  

 Git Clone "https://gitlab.com/jomoljaison/ethereum-samsung.git"  

In order to run this project locally in your computer you need the following packages installed in your System and the commands to install the packages are given below:

***Step 2*** You need to install Nodejs.

	<command> : npm install nodejs
	 Download ganache :https://www.trufflesuite.com/ganache

***Step 3***Run the following commands before the project is run:

	1. sudo apt-get install npm
	2. npm install
	3. npm install express-generator
	4. npm install web3
	5. npm install truffle


***Step 4***Open ganache

		Create new workspace
		
		
		1.Workspace name : SamsungContarct
		
		2.Server : Hostname------  127.0.0.1-lo
		
			      Port Number---- 8545
			      
			      Network ID----- 4002
			      
			      
		3.Save workspace

***Step 5***Change coinbase address in app.js

***Step 6***Change contract environment to Web3 provider

***Step 7***Use the following command to deploy the smart contract to the connected 	         chain: 

	   <command> : truffle migrate
***Step 8***Run the dapp using the command  

       <command> :  npm start  

Execution Flow:

***Step 9:*** Go http://localhost:3006/

		



			
 
