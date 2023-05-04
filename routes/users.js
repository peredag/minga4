//var express = require('express');
import express from 'express'

const router = express.Router(); //PASAR DE VAR A CONST

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource ::: users');
});

router.get('/admins',(req,res,next) => res.status(200).json({
  success:true,
  admins:[]
}))

//module.exports = router;
export default router;
