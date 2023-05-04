import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required:true},
    logo: {type: String, required:true},
    website: {type: String, required:true},
    description: {type: String, required:true},
    active: {type: Boolean, required:true},
    user_id: { 
        type: mongoose.Types.ObjectId, //--> tipo de dato para relacionar, ejem un producto con un usuario, puedo relacionar colecciones
        ref: 'users', //nombre de la coleccion con quien quiero referenciar o relacionar a ESTE MODELO
        required: true
    }
},{
    timestamps: true
})

let collection = 'companies' // debe ser siempre en plural, porque es un conjunto de recursos/datos y en lo posible en minuscula

let Company = mongoose.model(collection,schema) //define el modelo, invoca el metodo de mogoose model con 2 parametros (schema,coleccion )

export default Company