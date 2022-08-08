/*===========================================================
 Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
==============================================================
*/


// forma 1: criando um objeto e setando as chaves e valores:

let employee = {
    code: 10,
    name: "john"
}

//forma 2: criando um objeto, setando chaves e valores e explicitando
// o tipo de cada um:


let employee2:{code: number, name: string}={
    code:22,
    name: "Antony"
}

//forma 3 criando uma interface:

interface Funcionario{
    codigo: number,
    nome:String
}

// e tipando o objeto sendo do tipo da interface:

let employee3: Funcionario ={
    codigo: 97,
    nome: "Tadeu"
}

// ou assim:


let employee4 = {} as Funcionario
employee4.codigo = 78
employee4.nome = "Carlos"








