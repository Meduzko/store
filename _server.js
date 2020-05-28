var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var dataRouter = require('./routes/data');
var placeholderRouter = require('./routes/placeholder');

var app = express();

// WORKED on  06.09.2019
// AWS cluster (meduzko95@gmail.com)
const uri = 'mongodb+srv://mdz:123@cluster0-urkyl.mongodb.net/test?retryWrites=true&w=majority';

// Google cloud cluster (apanchuk59@gmail.com)
//const uri = 'mongodb+srv://mdz:123@store-fyf1s.gcp.mongodb.net/test?retryWrites=true&w=majority';
//const uri = 'mongodb://btracker:btracker1%40@ds153947.mlab.com:53947/btracker';

// var Schema = mongoose.Schema;
// var userScheme = new Schema({ name: { type: String }, avatarUrl: String }, { collection: 'Users' });
//
// mongoose.connect(uri, { useNewUrlParser: true }, (err, client) => {
//     if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//     }
//     app.listen(5000, function() {
//         console.log('Подключение к серверу...');
//       //  const collection = client.db("test").collection("testCollection");
//         // // perform actions on the collection object
//         // collection.find().toArray((err, results) => {
//         //     if (err) {
//         //         console.log(err);
//         //     }
//         //     console.log(results);
//         //     client.close();
//         // });
//
//     });
// });


app.listen(5000, function () {
    console.log('Подключение к серверу...');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/data', dataRouter);
app.use('/products', placeholderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
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
