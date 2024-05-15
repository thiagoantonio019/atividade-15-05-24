const conectarBancoDeDados = require('../config/db');

async function insert(Pessoa) {
    const connection = await conectarBancoDeDados();
    try {
        /**
         * beginTransaction() inicia a transação.
         * commit() confirma a transação, aplicando todas as alterações feitas durante a transação.
         * rollback() reverte a transação, descartando todas as alterações feitas durante a transação.
         */


        // Insere o cliente, a variável 'res' nos informa qual é o id do cliente para realizar os 'inserts' de endereços e telefones que contém chave estrangeira (FK)
        const res = await connection.query('INSERT INTO Pessoa (nome, data_nasc , cpf , sexo, estado_civil , email , telefone) VALUES (?, ?, ? , ?, ?, ? ,?)',
            [Pessoa.nome, Pessoa.data_nasc, Pessoa.cpf, Pessoa.sexo, Pessoa.estado_civil, Pessoa.email, Pessoa.telefone]);
        console.log('RESULTADO INSERT Pessoa =>', res);




        // Se todas as queries forem bem-sucedidas, um 'commit' é realizado para confirmar as execuções
        console.log('Transação concluída com sucesso.');
        return res;

    } catch (error) {
        // Em caso de erro, um 'rollback' é realizado para cancelar as execuções que foram realizadas
        await connection.rollback();
        console.log(error);
        return (error);
    }
}
module.exports = { insert };