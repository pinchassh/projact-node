import express from 'express';
const router = express.Router();
import * as controller from '../controller/controller.js'

router.get('/all-prodacts',controller.getAllProd)
router.get('/getById/:id',controller.getById)
router.post('/add',controller.addProd)
router.post('/update/:id',controller.updateProd)
router.delete('/delete/:id',controller.deleteProd)
router.put('/changeQuantity/:id/:cal',controller.changeQuantity)

export default router;
