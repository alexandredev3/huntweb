const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
// Toda vez que o usuario acessar a rota, 
// O .index ele vai listar todos os dados.
routes.get('/products/:id', ProductController.show);
// O id no express nos representamos ":id"
routes.post('/products', ProductController.store);
// A rota post e so quando vc for criar.
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;