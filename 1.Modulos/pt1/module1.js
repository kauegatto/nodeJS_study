let nome = "";
let sobrenome = "";

const falanome = (nome,sobrenome) =>
{
    return nome+' '+sobrenome
};

/* 
O node disponibiliza um objeto chamado module e através dele conseguimos exportar coisas(dentro do objeto exports)
console.log(module); 

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falanome = falanome;

ao invés de module.exports podemos usar somente exports!!

*/

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falanome = falanome;
console.log(module.exports);

/*
O this aponta para o exports, ou seja, poderiamos usar:
this.falanome = falanome;
*/
