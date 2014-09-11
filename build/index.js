'use strict';

var fs          = require('fs');
var path        = require('path');
var yeoman      = require('yeoman-generator');
var MincerBuild = require('mincerize/lib/mincer-build');

var MincerGenerator = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);

    this.option('ignore', {
      desc: 'Ignores the given string pattern from assets to compile',
      type: Array
    });

    this.option('includes', {
      desc: 'Adds the directory to Mincer load paths',
      type: Array,
      defaults: ['./']
    });

    this.option('output', {
      desc: 'Build assets into the provided directory',
      type: String,
      defaults: 'build'
    });

    this.option('mount', {
      desc: 'Asset pipeline entry point to ignore in file matching',
      type: String,
      defaults: 'assets'
    });

    this.argument('filename', {
      desc: 'Define the path to the input file (HTML or template file)'
    });
  },

  build: function() {
    var orig = fs.readFileSync(this.filename, 'utf8');
    var build = new MincerBuild(orig, this.options);

    var self = this;
    var done = this.async();
    build.on('end', function() {
      self.log('Result HTML:');
      self.log(build.body);

      // Create backup file, original file
      self.log('Creating backup file, original content to ' + self.filename + '.bak');
      fs.writeFileSync(self.filename + '.bak', orig);

      self.log('Replacing original file %file with resulting HTML.', {
        file: self.filename
      });

      fs.writeFileSync(self.filename, build.body);
    });
  }
});

module.exports = MincerGenerator;
