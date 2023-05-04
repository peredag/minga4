//import mongoose from "mongoose"; ---> una forma
import { Schema, model, Types } from "mongoose"// otra forma de hacer lo mismo que conn User.js

let schema = new Schema({
    name: { type: String, required: true},
    last_name: { type: String, required: false},
    city: { type: String, required: true},
    country: { type: String, required: true},
    date: { type: Date}, // por defecto seria false porque no esta especificado
    photo: { type: String, required: true},
    active: { type: Boolean, required: true},
    user_id: { 
        type: Types.ObjectId, //--> tipo de dato para relacionar, ejem un producto con un usuario, puedo relacionar colecciones
        ref: 'users', //nombre de la coleccion con quien quiero referenciar o relacionar a ESTE MODELO
        required: true
    }
},{
    timestamps: true
})

let collection = 'authors' // debe ser siempre en plural, porque es un conjunto de recursos/datos y en lo posible en minuscula

let Author = model(collection,schema) //define el modelo, invoca el metodo de mogoose model con 2 parametros (schema,coleccion )

export default Author