/**
 * ---------------------------------
 * loopback 扩展
 *
 * ---------------------------------
 * waitting
 */


var loopback = require('loopback');
var app = loopback();

app.enableAuth();
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3001, function () {
    console.log('server start at port:', 3001);
});
