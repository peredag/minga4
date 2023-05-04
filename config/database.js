import mongoose from 'mongoose'

mongoose.set('strictQuery', false)//setea que si de un filtro no encuentra nada, no devuelva nada
mongoose.connect(process.env.MONGO) //metodo de conexion a  base de datos
 .then(() => console.log('database connected')) //si puede conectarse muestra..
 .catch(err => console.log(err)) // sino puede conectarse muestra error

 