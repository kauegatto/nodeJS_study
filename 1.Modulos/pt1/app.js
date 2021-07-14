/* 
 importando no node 
 no node usaremos um require, assim, importaremos o module inteiro!
 o import aqui é diferente do import do ECMA (import module from './module.js';)
 le em : https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
*/

/* testes com o modulo 1
    const modulo = require('./module1.js');
    console.log(modulo.falanome("kaue","gatto"));
*/

// testes c o módulo 2 (class Pessoa);
const {Pessoa} = require('./module2.js'); // modulos do node (node_modules) nao precisam do ./

const pessoa1 = new Pessoa('kaue');
console.log(pessoa1);