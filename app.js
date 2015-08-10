var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    dbConnection = mongoose.connect('mongodb://localhost/resume/').connection,
    routes = {
      rest: require('./routes/rest')
    },

    app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DATABASE
dbConnection
    .on('error', console.error.bind(console, '[Mongoose ERROR]'))
    .once('open', function (callback) {
        console.log('[Mongoose Event] Connection OPEN');
    });

// VIEWS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// ROUTERS
app.use('/api', routes.rest); // prefix Restful API URLs with 'api'

// LOGGING
app.use(logger('dev'));
app.use(function(req, res, next) {
  console.log('Someone is accessing this app...');
  next();
});


// ERROR HANDLING MIDDLWARE
// 404 check, then continue to subsequent matching routes
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Dev Error Handler
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

// Prod Error Handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
