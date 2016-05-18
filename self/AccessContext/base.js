var loopback = require('loopback');
var app = loopback();

var properties = {};
var options = {};
var MyModel = loopback.Model.extend('MyModel', properties, options);

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3001, function () {
    console.log('server start at port:', 3001);
});
