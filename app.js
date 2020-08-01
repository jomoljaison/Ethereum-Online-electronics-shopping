var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Web3 = require("web3");

var MyContractJson = require(path.join(__dirname,'build/contracts/Samsung.json'))
web3 = new Web3("http://localhost:8545");
coinbase = "";
var contractAddress = MyContractJson.networks['4002'].address;
var contractAbi = MyContractJson.abi;
Samsung = new web3.eth.Contract(contractAbi, contractAddress);


var indexRouter = require('./routes/index');
var addproductsRouter = require('./routes/addproducts');
var getProductRouter = require('./routes/getProduct');
var buyproductRouter = require('./routes/buyproduct');
var buyproductsRouter = require('./routes/buyproducts');
var receiveSellerRouter = require('./routes/receiveSeller');
var addproductRouter = require('./routes/addproduct');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/addproducts', addproductsRouter);
app.use('/getProduct', getProductRouter);
app.use('/buyproducts',buyproductsRouter)
app.use('/buyproduct',buyproductRouter)
app.use('/receiveSeller',receiveSellerRouter)
app.use('/addproduct', addproductRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
