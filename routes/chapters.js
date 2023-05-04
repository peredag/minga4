import { Router } from "express" // 1-importa el constructor router
import read from '../controllers/chapters/read.js'//2-importo el controlador
let router = Router() //3-defino enrutador

router.get('/', read)//4-defino el endpoint

export default router//5-exporto

//ESTOS 5 PASOS SE REPITEN EN CADA RECURSO