const express = require("express")
const router = require('./src/routes/index');

const app = express();
const port= 5500;

//BODYPARSER
const  bodyParser = require('body-parser');


//CONFIGURAR O BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.json());

app.use('/', router);

//INICIA O SERVIDOR NA PORTA INFORMADA
app.listen(port, () => {
    console.log(`Servidor respondendo na porta ${port}`);
});