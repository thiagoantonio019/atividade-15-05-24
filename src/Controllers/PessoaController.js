const Pessoa = require('../Models/Pessoa');
const { insert } = require('../Models/PessoaModel');

const PessoaController = {
    adicionarPessoa: async (req, res) => {
        try {
            const { nome, data_nasc, cpf, sexo, estado_civil, email, telefone } = req.body;

            // Criar uma nova instância de Pessoa
            const novaPessoa = new Pessoa({nome, data_nasc, cpf, sexo, estado_civil, email, telefone});

            // Inserir a nova pessoa no banco de dados
            const result = await insert(novaPessoa);
            return res.json(result);
        } catch (error) {
            console.log(error);
            // let error_message = verificaErro(error);
            res.json(error);
        }
    }
};

module.exports = PessoaController;
