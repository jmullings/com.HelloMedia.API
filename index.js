var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hds = require('express-handlebars');
var favicon = require('serve-favicon');
var logger = require('morgan');
var index = require('./routes/index');
var path = require('path');
var app = express();

//Switching to Handlebars view engine setup
app.engine('hds', hds({extname: 'hds', defaultlayout: 'layout', layoutsdir: __dirname + '/views/layouts'}));
app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hds');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;