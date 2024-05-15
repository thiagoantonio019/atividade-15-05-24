class Pessoa {

    constructor(pPessoa) {
        console.log(pPessoa);
        this.id = (pPessoa.id !== null || pPessoa.id > 0) ? this.id = pPessoa.id : this.id = null;
        this.nome = (pPessoa.nome);
        this.DataConvert(pPessoa.data_nasc);
        this.cpf = (pPessoa.cpf);
        this.sexo =(pPessoa.sexo);
        this.estado_civil=(pPessoa.estado_civil);
        this.email = (pPessoa.email);
        this.telefone = (pPessoa.telefone);
    }

    get Nome() { return this.nome; }
    set Nome(value) { this.nome = value }

    get Data_nasc() { return this.Data_nasc; }
    set Data_nasc(value) {
        this.Data_nasc = value;
    }
    get Cpf() { return this.cpf; }
    set Cpf(value) { this.cpf = value }

    get Sexo() { return this.sexo; }
    set Sexo(value) { this.sexo = value }

    get Estado_civil() { return this.estado_civil; }
    set Estado_civil(value) { this.estado_civil = value }


    get Email() { return this.email; }
    set Email(value) { this.email = value }

    get Telefone() { return this.telefone; }
    set Telefone(value) { this.telefone = value }


    DataConvert(value) {
        console.log(value);
        let [dia, mes, ano] = value.split('/');
        let dataFormatada = `${ano}-${mes}-${dia}`;
        this.data_nasc = dataFormatada;
    }
}

module.exports = Pessoa;