module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.get('/i', server.loopback.status());
  server.get('/info', function (req, res) {
    res.send('info');
    res.end();
  });
  server.use(router);
};
