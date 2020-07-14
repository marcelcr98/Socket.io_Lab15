const express =require('express');
const user = require('./models/user');
const app = express();

http = require('http').Server(app);
io = require('socket.io')(http);
<<<<<<< HEAD

app.set('port', process.env.PORT || 3000)
.set('view engine','jade');

app.use('/static', express.static('public'))
.get('/', (req, res) => {
    res.render('main');
});
 
io.on('connection', (socket)=> {
    console.log('Usuario conectado');
    socket.on('crear', (data)=> {
        user.create(data, (rpta)=> {
            io.emit('nuevo', rpta);
        });
    });
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    user.show(function(data){
        socket.emit('listar',data);
    });

    socket.on('actualizar',(data)=>{
      user.update(data, (rpta)=>{
          io.emit('nuevo',rpta);
        });
    });
    socket.on('eliminar', (data)=>{
        user.delete(data, (rpta)=>{
            io.emit('borrado',rpta);
        });
    });
});

=======

app.set('port', process.env.PORT || 3000)
.set('view engine','jade');

app.use('/static', express.static('public'))
.get('/', (req, res) => {
    res.render('main');
});
 
io.on('connection', (socket)=> {
    console.log('Usuario conectado');
    socket.on('crear', (data)=> {
        user.create(data, (rpta)=> {
            io.emit('nuevo', rpta);
        });
    });
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});
>>>>>>> df72bf0a4972435b6e1fcaa5e992ff4f6d65c53a

http.listen(app.get('port'), ()=> {
    console.log('Servidor conectado en el puerto  ', app.get('port'));
});




/* var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;*/
