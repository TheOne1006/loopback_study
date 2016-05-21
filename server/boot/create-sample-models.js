

var async = require('async');
var debug = require('debug')('app:boot:createModel');

module.exports = function (app, cb) {
  // data sources
  var mongodb = app.dataSources.mongodb;

  debug('createModel');

  // create default user
  mongodb.automigrate('myUser', function(err) {
    if (err) return cb(err);

    var myUserModel = app.models.myUser;
    var application = app.models.myappliction;

    async.waterfall([
        function(next) {
          createMyuser(next);
        },
        function(models, next) {
          debug('models');
          debug(models);
          var fooUserId = models[0].id;

          mongodb.automigrate('myappliction', function(err) {
            app.models.myappliction.create([{
              name: 'app-demo',
              owner: fooUserId,
              clientKey: '123'
            }], function (err, applicationModel) {
              debug('application models');
              debug(applicationModel);
              if(err) {
                return cb(err);
              }
              next();

            });
          });

        }
    ], function (err, result) {
        cb();
    });
  });


  // create reviewers
function createMyuser(next) {
  mongodb.automigrate('myUser', function(err) {
    if (err) return next(err);

    app.models.myUser.create([
      {email: 'foo@bar.com',realm: 'foo',username:'foo', password: '123'},
      {email: 'john@doe.com',realm: 'john',username:'john', password: '456'},
      {email: 'jane@doe.com',realm: 'jane',username:'jane', password: '789'}
    ], next);
  });
}

};
