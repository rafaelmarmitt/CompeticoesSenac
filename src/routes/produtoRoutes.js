import express from 'express'
import {

    listarProdutos,
    inserirProdutos,
    atualizarProduto,
    excluirProduto

} from '../controllers/produtoController.js'

const router = express.Router();

router.get('/', listarProdutos);
router.post('/', inserirProdutos);
router.put('/:id', atualizarProduto);
router.delete('/:id', excluirProduto);

export default router;