import express from 'express'
import { addproduct, deleteProduct, productList } from '../controller/productController.js';
const router = express.Router();

router.post('/addproduct',addproduct)
router.get('/productList',productList)
router.post('/deleteproduct',deleteProduct)

export { router}