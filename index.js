const prompt = require("prompt");

prompt.start();

let schema = {
    properties: {
      name: {
        pattern: /^\D+$/,
        message: 'Nome não pode estar em branco e somente letras',
        required: true
      },
      sobrenome: {
        pattern: /^\D+$/,
        message: 'Sobrenome não pode estar em branco e somente letras',
        required: true
      },
      endereco: {
        pattern: /^.+$/,
        message: 'Endereço não pode estar em branco',
        required: true
      },      
      email: {
        pattern: /^([a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+|[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3}))$/,
        message: 'E-mail inválido',
        required: true
      },   
      cpf: {
        pattern: /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/,
        message: 'CPF inválido, digite apenas números ou formato 000.000.000-00',
        required: true
      },   

    }
  };

prompt.get(schema, function(_, result) {
    console.log(`Nome: ${result.name}
Sobrenome: ${result.sobrenome}
Endereço: ${result.endereco}
E-mail: ${result.email}
CPF: ${result.cpf}`);
}
);