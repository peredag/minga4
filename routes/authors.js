import express from 'express'
import read from '../controllers/authors/read.js' //llama el controlador

let router = express.Router()//DEFINE ENRUTADOR

//router.post('/', (req,res,next)=> res.status(200).send('autor creado'))
router.get('/', read) // le pasa a la ruta el metodo del controlador
//router.put('/:id',(req,res,next)=> res.status(200).send('autor modificado'))
//router.delete('/:id',(req,res,next)=> res.status(200).send('autor eliminado'))

export default router

