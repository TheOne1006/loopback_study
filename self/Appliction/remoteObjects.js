/**
 * ---------------------------------
 * Get all remote objects.
 * 1. 如何加载
 * ---------------------------------
 * wating
 */


var loopback = require('loopback');
var app = loopback();
var debug = require('debug')('loop:*');

debug(app.remoteObjects());

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3001, function () {
    console.log('server start at port:', 3001);
});
