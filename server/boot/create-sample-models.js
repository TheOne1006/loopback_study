

var async = require('async');
var debug = require('debug')('app:boot:createModel');

module.exports = function (app, cb) {
  // data sources
  var mongodb = app.dataSources.mongodb;

  // create default user
  mongodb.automigrate('myUser', function(err) {
      if (err) return cb(err);

      app.models.myUser.create([
        {email: 'foo@bar.com',username:'foo', password: '123'},
        {email: 'john@doe.com',username:'john', password: '456'},
        {email: 'jane@doe.com',username:'jane', password: '789'}
      ], cb);
    });
};
