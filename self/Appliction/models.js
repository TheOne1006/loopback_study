/**
 * ---------------------------------
 * loopback 扩展
 *
 * ---------------------------------
 * relove
 */


var loopback = require('loopback');
var app = loopback();
var debug = require('debug')('loop:*');

// 创建数据源
app.dataSource('db', {"name": "db","connector": "memory"});

// 添加model
var User = loopback.User;
app.model(User, { dataSource: 'db' });

app.model('product', {dataSource: 'db'});
app.model('customer-receipt', {dataSource: 'db'});

// 获取model list
var models = app.models();


// 获取单个 model
var Product = app.models.Product;
var product = app.models.product;
debug('单个model 明明首字母不区分大小写 :', Product === product);

// 转驼峰
var CustomerReceipt = app.models.CustomerReceipt;
var customerReceipt = app.models.customerReceipt;
debug('转驼峰 :', CustomerReceipt === customerReceipt);

debug('models.js');
models.forEach(function(Model) {
  debug('Model Name: ', Model.modelName); // color
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3001, function () {
    console.log('server start at port:', 3001);
});
