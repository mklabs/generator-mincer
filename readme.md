# generator-mincer

> [Yeoman](http://yeoman.io) generator for [Mincer](https://github.com/nodeca/mincer)


## Getting Started

### Install yeoman

```bash
npm install -g yo
```

### Install generator-mincer generator

To install generator-mincer from npm, run:

```bash
npm install -g generator-mincer
```

Finally, initiate the generator:

It'll create an application based on Mincer example app, with less,
coffee-script, and jQuery / Bootstrap as bower dependencies.

```bash
$ mkdir mincer-webapp && cd mincer-webapp
$ yo mincer
   create assets/images/stripes.png
   create assets/javascripts/app.js.coffee
   create assets/javascripts/templates/foobar.jst.jade
   create assets/stylesheets/app.css.less
   create bower.json
   create index.html
   create views/layout.jade
   create views/view.hbs
   create .mincerrc


I'm all done. Running bower install & npm install for you to install the required dependencies. If this fails, try running the command yourself.


bower jquery#~2.1.1             cached git://github.com/jquery/jquery.git#2.1.1
bower jquery#~2.1.1           validate 2.1.1 against git://github.com/jquery/jquery.git#~2.1.1
bower bootstrap#~3.2.0          cached git://github.com/twbs/bootstrap.git#3.2.0
bower bootstrap#~3.2.0        validate 3.2.0 against git://github.com/twbs/bootstrap.git#~3.2.0
bower jquery#~2.1.1            install jquery#2.1.1
bower bootstrap#~3.2.0         install bootstrap#3.2.0

jquery#2.1.1 bower_components/jquery

bootstrap#3.2.0 bower_components/bootstrap
└── jquery#2.1.1
npm WARN package.json mincerize@0.0.1 No repository field.

Your app is ready.
Try starting the server with yo mincer:serve
and browse the app at http://localhost:3000
```

### Serve the webapp

Start the development and asset pipeline server

```bash
$ yo mincer:serve

# with more logs
$ DEBUG=mincer* yo mincer:serve
mincerize:serve Monitoring changes for +0ms [ '/home/mk/src/mklabs/generator-mincer/test/scaffold/assets/javascripts/**/*',
  '/home/mk/src/mklabs/generator-mincer/test/scaffold/assets/stylesheets/**/*',
  '/home/mk/src/mklabs/generator-mincer/test/scaffold/assets/images/**/*',
  '/home/mk/src/mklabs/generator-mincer/test/scaffold/assets/**/*',
  '/home/mk/src/mklabs/generator-mincer/test/scaffold/bower_components/**/*',
  '/home/mk/src/mklabs/generator-mincer/test/scaffold/vendor/**/*' ]
Listening on localhost:3000
```

### Build

This command lets you build assets that are used within the `index.html`
file, and available in one of Mincer's include paths. It'll create an
`index.html.bak` backup file with original content, and modify the
original HTML file with revved assets.

```bash
$ DEBUG=mincer* yo mincer:build index.html --includes=assets/stylesheets --includes=assets/javascripts --includes=bower_components
... Adding assets/stylesheets, assets/javascripts, bower_components paths to Mincer environment ...
... Start build ...
... Compiling 3 assets ...
Writing /home/mk/src/mklabs/generator-mincer/test/scaffold/build/app-cbd013f8a6957a5f1b83565d9abc303c.css
Writing /home/mk/src/mklabs/generator-mincer/test/scaffold/build/app-ddff28408b4cab1bf96f19ec9418017a.js
... Manifest: /home/mk/src/mklabs/generator-mincer/test/scaffold/build/manifest.json ...
... Replacing original reference in HTML ...
Result HTML:
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Mincer demo</title>
    <link rel="stylesheet" type="text/css" href="build/app-cbd013f8a6957a5f1b83565d9abc303c.css" />
  </head>
  <body>
    <div class="container">
      <h1>Mincer demo</h1>
    </div>
    <script src="build/app-ddff28408b4cab1bf96f19ec9418017a.js"></script>

    <script src="http://localhost:3000/livereload.js"></script>
  </body>
</html>

Creating backup file, original content to index.html.bak
```


## License

MIT
