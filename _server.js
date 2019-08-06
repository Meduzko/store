var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataRouter = require('./routes/data');

var app = express();

const uri = 'mongodb+srv://mdz:123@cluster0-urkyl.mongodb.net/test?retryWrites=true&w=majority';
MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    app.listen(5000, function() {
        console.log('Подключение к серверу...');
      //  const collection = client.db("test").collection("testCollection");
        // // perform actions on the collection object
        // collection.find().toArray((err, results) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     console.log(results);
        //     client.close();
        // });

    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test', usersRouter);
app.use('/data', dataRouter);

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
