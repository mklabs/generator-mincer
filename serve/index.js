'use strict';

var path         = require('path');
var yeoman       = require('yeoman-generator');
var MincerServer = require('mincerize/server');

var MincerGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);

    // And next add your custom code
    this.option('port', {
      desc: 'Specify the server port (default: 3000)',
      type: Number,
      defaults: 3000
    });

    this.option('mount', {
      desc: 'Specify the mount point for the Asset Pipeline (default: assets)',
      defaults: 'assets',
    });

    this.option('includes', {
      desc: 'Adds the directory to Mincer load path (default: ./)',
      type: Array,
      defaults: []
    });
  },

  serve: function() {
    var server = MincerServer(this.options);
    var self = this;
    var port = this.options.port;
    var done = this.async();

    server.listen(port, function(err) {
      if (err) {
        self.log("Failed start server: " + (err.message || err.toString()));
        process.exit(128);
      }

      self.log('Listening on localhost:%s', port);
    });
  }
});

module.exports = MincerGenerator;
