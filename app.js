var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// views
app.get('/', function (req, res) {
  res.render('index', { 
    title: 'What is Chariz?'
  });
})

app.get('/ui/osx/1.0/featured/', function (req, res) {
  res.render('osx/featured', { 
    title: 'Featured', 
    package: {
      identifier: 'ws.hbang.typestatusmac', 
      name: 'TypeStatus', 
      section: 'Tweaks'
    },
    url: {
      signin: 'https://accounts.chariz.io/', 
      account: 'https://accounts.chariz.io/profile/',
      moresources: '/moresources/',
      support: 'https://twitter.com/charizteam'
    }
  });
})

app.get('/ui/osx/1.0/package/:id/', function (req, res) {
  res.render('osx/package', { 
    package: {
      identifier: 'ws.hbang.typestatusmac',
      name: 'TypeStatus',
      section: 'Tweaks',
      homepage: 'http://typestatus.com',
      version: '2.0',
      size: '12022346',
      price: '0',
      author: {
        name: 'HASHBANG Productions',
        email: 'support@hbang.ws'
      },
      description: 'Ever wish you could tell when someone else is typing an iMessage to you or reading an iMessage you’ve sent from where ever you are? With TypeStatus, now you can. The contact’s name will be shown on your device’s status bar, regardless of where you are in OS X. You can also use a simple status bar icon instead of an overlay for typing notifications.',
      depiction: 'https://io.tmnlsthrn.com/dep/ts.html'
    }
  });
})

app.get('/osx/package/:id/', function (req, res) {
  res.render('osx/package', { 
    package: {
      identifier: 'ws.hbang.typestatusmac',
      name: 'TypeStatus',
      section: 'Tweaks',
      homepage: 'http://typestatus.com',
      version: '2.0',
      size: '12022346',
      price: '0',
      author: {
        name: 'HASHBANG Productions',
        email: 'support@hbang.ws'
      },
      description: 'Ever wish you could tell when someone else is typing an iMessage to you or reading an iMessage you’ve sent from where ever you are? With TypeStatus, now you can. The contact’s name will be shown on your device’s status bar, regardless of where you are in OS X. You can also use a simple status bar icon instead of an overlay for typing notifications.'
    }
  });
})

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
