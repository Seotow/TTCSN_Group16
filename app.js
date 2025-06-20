// Load environment variables
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var authRouter = require('./routes/authRoutes');
var customerRouter = require('./routes/customerRoutes');
var adminRouter = require('./routes/adminRoutes');

var app = express();

app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    maxAge: 86400000,  // 24 hours
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
})


app.use('/', authRouter);
app.use('/', customerRouter);
app.use('/admin', adminRouter);



// Health check endpoint for deployment monitoring (optimized for free tier)
app.get('/health', async (req, res) => {
  try {
    // Skip database test for frequent health checks to save resources
    const skipDbTest = req.query.quick === 'true';
    let dbStatus = 'skipped';
    
    if (!skipDbTest) {
      const { testConnection } = require('./config/dbUtils');
      const dbHealthy = await testConnection();
      dbStatus = dbHealthy ? 'connected' : 'disconnected';
    }
    
    res.status(200).json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'development',
      database: dbStatus
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'development',
      database: 'error',
      error: error.message
    });
  }
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


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
