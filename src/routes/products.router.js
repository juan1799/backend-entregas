import express from 'express';
import productsManager from '../utils/productsManager.js';

const productsRouter = express.Router();

productsRouter.get('/', productsManager.getAllProducts);
productsRouter.get('/:pid', productsManager.getProductById);
productsRouter.post('/', productsManager.addProduct);
productsRouter.put('/:pid', productsManager.updateProduct);
productsRouter.delete('/:pid', productsManager.deleteProduct);

export default productsRouter;