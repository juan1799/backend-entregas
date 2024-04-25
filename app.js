import express from 'express';
import productsRouter from './src/routes/products.router.js';
import cartsRouter from './src/routes/carts.router.js';
import config from './src/configs/config.js';

const app = express();
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/static', express.static(`${config.DIRNAME}/public`));

// Iniciar el servidor
app.listen(config.PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${config.PORT}/`);
});