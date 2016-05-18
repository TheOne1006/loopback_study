/**
 * ---------------------------------
 * 创建 Peristed model
 * 绑定数据源
 * 1. 统计数据
 * 2. 创建数据
 *
 * ---------------------------------
 * resolved
 */


var loopback = require('loopback');
var app = loopback();
var debug = require('debug')('loop:*');
var async = require('async');
// 创建数据源
app.dataSource('db', {"name": "db","connector": "memory"});
var Person =  loopback.PersistedModel.extend('Person', {
  name: String,
  age: Number
});

app.model(Person, { dataSource: 'db' });

// 确保顺序执行
async.waterfall([
    function(cb){
      // 统计当前数据
      Person.count(function (err, count) {
        debug('count: %s' ,count);
        cb()
      });
    },
    function(cb){
      // 创建 1条数据
      Person.create({name:'xiaoming',age:18}, function (err, models) {
        debug('create an object , arg models');
        debug(models); // {}
        cb();
      });
    },
    function (cb) {
      Person.create([{name:'foo',age:11},{name:'bar',age:20}], function (err, models) {
        debug('create use array , arg models:')
        debug(models); // []
        cb();
      });
    },
    function (cb) {
      Person.count(function (err, count) {
        debug('count: %s' ,count); //3
        cb()
      });
    }
], function () {
  console.log('end');
});
