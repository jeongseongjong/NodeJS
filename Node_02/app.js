var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// index.js와 users.js를 bean으로 설정하는 역할
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var myRouter = require('./controllers/myController');

var app = express();

// view engine setup
// __dirname 
//   시스템 변수, 현재 프로젝트에 root 디렉토리
//   ../../Node_02
// path.join(__dirname, 'views')
//   ../../Node_02/view/ 라는 형식으로 생성
//   디렉토리 정보를 생성
// *.ejs(view)파일들이 저장될 폴더를 지정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

// 만약 json형태의 데이터들이 있으면
// 자동 parsing을 수행 해 달라
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// session과 관련된 미들웨어
app.use(cookieParser());

// static files(이미지, css, js 등등)을 저장해 두었다가
// web의 요청이 있으면 아무것도 관여하지말고 response하라
// img src="" :  web에서 이미지를 요청한다
// link href="": web에서 css파일을 요청한다.
// script src="" : web에서 js 파일을 요청한다.
app.use(express.static(path.join(__dirname, 'public')));

// localhost:3000/ 이라고 요청을 하면 
// indexRouter(controller의 bean / RequestMapping과 같은)에게 보내라
app.use('/', indexRouter);

// localhost:3000/users 을 요청하면
// usersRouter(controller의 bean / RequestMapping과 같은)에게 보내라
app.use('/users', usersRouter);

// localhost:3000/hello라고 요청을 하면
// myRouter(./controllers/myController.js)에게 
// 요청을 전달하라
app.use('/hello', myRouter);

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
