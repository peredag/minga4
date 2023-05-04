/* let read = (req,res,next)=> res.status(200).render('index', {
    title: '/CATEGORIES',
    subtitle: 'end points of categories'
})

export default read */
import Category from './../../models/Category.js'//importa el modelo que va a controlar

//1.30.00--uso de async await
let read = async(req,res,next)=> { //la funcion si o si tiene que ser asincrona (async) por que espera la respuesta de mongo
    try{                           //usa sintaxis try catch para intentar algo y ctachear los errores que puedan surgir
        let all = await Category.find() //invoca el modelo y le pasa el metodo find()--> find trae TODOS los recursos del modelo category
        return res.status(200)  //configura la respuesta que le envia al cliente, si tiene exito la respuesta es 200
            .json({            //la respuesta va como un json
                categories:all
            })
    }catch(error) {          //configura el catch
        console.log(error)   //
        return res.status(400)// le configura un json
            .json({
                error: 'ha ocurrido un error!' // personaliza el error
            })

    }
}

export default read