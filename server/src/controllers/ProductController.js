const mongoose = require('mongoose');

const Product = mongoose.model('Product');

mongoose.set('useFindAndModify', false);

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        // "page = 1" Estou definindo uma rota padrão.
        const products = await Product.paginate({}, { page, limite: 10 });
        // No page:1 podemos deixar so page mesmo.

        return res.json(products);
    },

    async show(req, res) { // Show e a parti de detalhes.
        const products = await Product.findById(req.params.id);

        return res.json(products);
    },

    async store(req, res) {
        // Criação
        const products = await Product.create(req.body); // Ele vai pegar todos os campos atraves do req.body

        return res.json(products);
        // Eu quero retorna os produto que acabou de ser criado.
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        // O new: true e para ele retorna com o produto atualizado.

        return res.json(product)
    },

    async destroy(req, res) {
        const products = await Product.findById(req.params.id);

        await products.remove();

        return res.send();
        // Ele so vai retorna uma pagina de sucesso.
    }
};