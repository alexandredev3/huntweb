# Criando primeira rota.

    - request: 
        * Quando nos estamos dando um f5 e um request.

# Utilizando Nodemon.

    [ x ] > yarn add -D nodemon

# Instalando mongoDB.

    O docker ele vai subi uma maquina virtual e tudo o que nos instala vai pra essa maquina virtual, mongoDb node npm mysql, eles não vão afetar em nada em nosso sistema operacional, isso e chamado de conternerização.

    [ x ] > yarn add mogoose
        * Ele e um "orm", vc vai usar codigo java script para fazer os models

# Criando model de produto.

    * Model representa uma tabela, uma estrutura de dados que vai ser gravado la no banco de dados.

    1. Crie uma pasta src, depois crie uma pasta models, e dentro dessa pasta models crie um arquivo Product.js sempre em inglês ( Coloque um nome que faz sentido com a aplicação que vc vai criar. )

    - Schemas: São os campos que vai ter e que tipo de valores ele vai ter.

    require('./src/models/Product');
      * Coloque esse codigo la no index.js para importa o model.

    [ x ] > yarn add require-dir
        * Ele faz esse require em todos os arquivos automaticamente.

        ** Import o seu requireDirno index.js

            const requireDir = require('require-dir');

        ** La naquele require model.

            requireDir('./src/models');
                * troque por requireDir e deixe so na pasta models.

        - Testa isso tudo para ver se esta funcionando: 

            const Product = mongoose.model('Product')

            app.get('/', (request, response) => {
                Product.create({
                    title: 'React Native',
                    description: 'Build native apps with react',
                    url: 'http://github.com/facebook/react-naive',
                });

                return response.send('Hello Rocketseat');
            });

            * Ver se não deu nenhum erro no terminal, se não, entre no mongoDB Atlas e entre no cluster que esta connectado com o back-end, e se tudo estiver certo a tabela com esses campos vai está lá.

# Restruturação de arquivos.

    1. Crie um arquivo routes dentro da pasta src, dentro desse arquivo coloque a sua rota que estava no index.js,

    2. 

        app.use('/api', require('./src/routes'));
            * Ele vai aceita todo de tipo de metodo
            * No barra vc pode colocar o nome de caminho que vc quiser.]
            
            Ex:
                api/products
                    * Caso se vc tivesse um caminho products so ia a api antes.

    
** Acesse a pagina api/products e todo o codigo json vai estar lá.

# Utilizando Insomnia.

    Coloque essa url no Insomnia: 

        http://localhost:3001/api/products

    * Dar um send ( E para todas aquelas informações em json e para aparecer la no insomnia )

    * Vá no Manage Environments e coloque esse codigo

        {
            "base_url": "http://localhost:3001/api"
        }

# Crud.

    {{ base_url  }}/products/5e888c309cf3ce0ec860286c
        * Coloque essa url la no Insomnia.

    {{ base_url  }}/products/5e888c309cf3ce0ec860286c
        * Crie um arquivo no Insomnia com o metodo PUT, e coloque essa url.

    {{ base_url  }}/products/5e888c309cf3ce0ec860286c
        * Crie um arquivo no Insomnia com o metodo DELETE, e coloque essa url. ( Na frente vc vai colocar o id do "produto" que vc quer deletar )

# Paginação da lista

    [ x ] > yarn add mongoose-paginate

    1. Vá no seu model de Product e import o mongoose-paginate.

        const mongoosePaginate = require('mongoose-paginate');

    2. No model, coloque esse comando: 

        ProductSchema.plugin(mongoosePaginate);

    3. const products = await Product.paginate({}, { page: 1, limite: 10 });

            * La naquele index...

            * O primeiro objeto e para colocar as suas condicionais, caso vc queira fazer algum filtro, o segundo e as configurações da sua paginação, o "page" e a pagina atual, e a limite e quandos produtos vai ter em cada pagina.

    ** {{ base_url  }}/products?page=3

        * O page=3 e a pagina que vc quer ir la no insomnia.



        "total": 21,    --> E toda de registros que vc tem.
        "limit": 10,    --> E o limite de registros em cada pagina.
        "page": "3",    --> E quantidade de paginas.
        "pages": 3      --> E a pagina que vc esta atualmente.
            (La no insomnia)

        
# Cors.

    [ x ] > yarn add cors

    app.use(cors());
        * la no index coloca esse codigo

        * () aqui e onde vai ficar os dominios que pode acessar sua api, se vc deixar vazia ele vai permitir que todos os dominios tenha acesso.
    

    