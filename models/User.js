import mongoose from "mongoose";

let schema = new mongoose.Schema({
    email: {type: String, required:true},
    password: {type: String, required:true},
    photo: {type: String, required:true},
    role: {type: Number, required:true},
    is_online: {type: Boolean, required:true},
    is_verified: {type: Boolean, required:true},
    verify_code: {type: String, required:true},
},{
    timestamps: true
})

let collection = 'users' // debe ser siempre en plural, porque es un conjunto de recursos/datos y en lo posible en minuscula

let User = mongoose.model(collection,schema) //define el modelo, invoca el metodo de mogoose model con 2 parametros (collection,schema )

export default User


/* 
new es un constructor de mongoose 
le pasa como parametro un objeto, con propiedades
email: 
password:
photo:
role:
is_online:
is_verified:
verify_code:

let collection =  nombre de la coleccion
*/