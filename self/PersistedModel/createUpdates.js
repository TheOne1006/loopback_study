/**
 * ---------------------------------
 * 1. 创建或更新
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
   function (cb) {
     // 创建 1条数据
     Person.create({name:'xiaoming',age:18}, function (err, models) {
       debug('create an object , arg models');
       debug(models); // {}
       cb(null, models);
     });
   },
   function (models, cb) {
    //  Person.bulkUpdate([], function (err, models) {
    //    debug('create an object , arg models');
    //    debug(models); // {}
    //    cb();
    //  });
   }
 ],function () {
   console.log('end')
 });
