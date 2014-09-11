'use strict';

var path   = require('path');
var yeoman = require('yeoman-generator');
var ncp    = require('ncp');

var MincerGenerator = yeoman.generators.Base.extend({
  copyFolder: function() {
    this.log('Copying %source to %dest', {
      source: this.sourceRoot(),
      dest: this.destinationRoot()
    });

    this.expandFiles('**/*', {
      cwd: this.sourceRoot()
    }).forEach(function(file) {
      this.src.copy(file, file);
    }, this);

    this.src.copy('.mincerrc', '.mincerrc');
  },

  end: function() {
    var self = this;
    this.installDependencies(function() {
      self.log('\nYour app is ready.');
      self.log('Try starting the server with yo mincer:serve');
      self.log('and browse the app at http://localhost:3000');
    });
  }
});

module.exports = MincerGenerator;
