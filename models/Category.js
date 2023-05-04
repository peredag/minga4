import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required:true},
    color: {type: String, required:true},
    hover: {type: String, required:true},
    description: {type: String, required:true},
    cover_photo: {type: String, required:true},
    character_photo: {type: String, required:true},
},{
    timestamps:true
})
let collection = 'categories'

let Category = mongoose.model(collection,schema)
export default Category


/* 
MODELO DE COMO SE CREA 
import mongoose from "mongoose";

let schema = new mongoose.Schema({},{})
let collection = 'categories'

let Category = mongoose.model(schema, collection)
export default Category
*/