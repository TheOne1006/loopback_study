var async = require('async');
var debug = require('debug')('app:boot:login');

module.exports = function (app, cb) {

  // data sources
  var myUserModel = app.models.myUser;

  debug('auto login, get token');
  myUserModel.login({username: 'foo', password: '123'}, 'user',function(err, accessToken) {
    debug(accessToken);
    cb();
  });
};
