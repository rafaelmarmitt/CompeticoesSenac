import express from 'express'
import {

    listarProdutos,
    inserirProdutos,
    
} from '../controllers/produtoController.js'

const router = express.Router();

router.get('/', listarProdutos);
router.post('/', inserirProdutos);

export default router;