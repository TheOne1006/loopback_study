/**
 * ---------------------------------
 * 注册配置中间件
 * 1. 如何使用
 * 
 * ---------------------------------
 * wating
 */
var loopback = require('loopback');
var app = loopback();
var debug = require('debug')('loop:*');
var compression = require('compression');

app.middlewareFromConfig(compression, {
    enabled: true,
    phase: 'initial',
    params: {
        threshold: 128
    }
});


app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3001, function () {
    console.log('server start at port:', 3001);
});
