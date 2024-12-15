var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Sets up local paths to the router files
var usersRouter = require('./routes/users');
var portfolioRouter = require('./routes/portfolio');
var professionalLinksRouter = require('./routes/links');
var projectsRouter = require('./routes/projects');
// Authentication Pages
var loginRouter = require('./routes/Authentication Pages/login');
var accountRouter = require('./routes/Authentication Pages/account');
var logoutRouter = require('./routes/Authentication Pages/logout');
// Private Pages
var universalPlaylistRouter = require('./routes/Private Pages/universalPlaylist');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Associates URL paths to routers
app.use('/users', usersRouter);
app.use('/', portfolioRouter);
app.use('/links', professionalLinksRouter);
app.use('/projects', projectsRouter);
// Authentication Pages
app.use('/login', loginRouter);
app.use('/account', accountRouter);
app.use('/logout', logoutRouter);
// Private Pages
app.use('/universalPlaylist', universalPlaylistRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
