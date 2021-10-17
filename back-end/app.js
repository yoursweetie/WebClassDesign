var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {checkAPP, checkUser, checkAdmin} = require('./util/middleware')
//引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//增加管理员路由
var adminRouter = require('./routes/admin');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置允许跨域访问该服务.
//设置跨域访问
app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/', checkAPP, indexRouter);
app.use('/users', checkAPP, usersRouter);
app.use('/admin', [checkAPP, checkUser, checkAdmin], adminRouter);
module.exports = app;
