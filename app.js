import 'dotenv/config.js'
import './config/database.js'// esta linea tiene que estar si o si abajo de dotenv, porque depende de dotenv
//var createError = require('http-errors');
import createError from 'http-errors'

//var express = require('express');
import express from 'express'

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
//import usersRouter from './routes/users.js'; ---> lo sacamos solo va a quedar index router en app.js
import cors from 'cors'
import { __dirname } from './utils.js';

const app = express(); // PASA DE VAR A CONST

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter); ---> lo sacamos solo va a quedar index router en app.js

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

//module.exports = app;
export default app
