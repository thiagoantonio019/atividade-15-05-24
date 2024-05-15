const express = require("express");
const router = express.Router();

const PessoaController = require("../Controllers/PessoaController");



router.post('/Pessoa/novo', PessoaController.adicionarPessoa);


module.exports = router;