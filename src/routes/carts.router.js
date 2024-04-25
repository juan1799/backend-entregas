import express from 'express';
import cartsManager from '../utils/cartsManager.js';

const cartsRouter = express.Router();

cartsRouter.get('/', cartsManager.getAllCarts)
cartsRouter.post('/', cartsManager.createCart);
cartsRouter.get('/:cid', cartsManager.getCartById);
cartsRouter.post('/:cid/product/:pid', cartsManager.addProductToCart);

export default cartsRouter;