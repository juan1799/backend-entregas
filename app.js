import express from 'express';
import config from './src/configs/config.js'
import { products } from './src/mocks/products.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.status(200).send({origin: 'server 1', payload: products})
})

app.listen(config.PORT, () => {
    console.log(`App activa en puerto ${config.PORT}`);
});