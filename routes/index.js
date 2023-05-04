//var express = require('express');
import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
import categoriesRouter from './categories.js'
import companyRouter from './companies.js'
import mangasRouter from './mangas.js'
import chaptersRouter from './chapters.js'


const router = express.Router(); //PASAR DE VAR A CONST

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.use('/users', userRouter)
router.use('/auth', userRouter) // este auth es de authentication, no de authors
router.use('/authors', authorRouter)
router.use('/categories',categoriesRouter)
router.use('/companies', companyRouter)
router.use('/mangas', mangasRouter)
router.use('/chapters', chaptersRouter)

//module.exports = router;
export default router;
