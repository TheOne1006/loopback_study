/**
 * -------------------------------
 * 基本同 express
 * -------------------------------
 * resolve
 */

var loopback = require('loopback');
var app = loopback();

app.get('/', function(req, res){
  res.send('hello world');
});

app.set('port', 3001);
app.listen(function () {
    console.log('server start at port:', 3001);
});
