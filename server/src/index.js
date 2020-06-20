const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@skylab-nodejs-lhhtf.mongodb.net/nodeapi?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
requireDir('./models');
// Nos estamos importando o model

// Rotas
app.use(express.json()); // A parti de agora vai enviar json
app.use(cors());
app.use('/api', require('./routes'));
// Ele vai aceita todo de tipo de metodo
// No barra vc pode colocar o nome de caminho que vc quiser.

app.listen(3001)