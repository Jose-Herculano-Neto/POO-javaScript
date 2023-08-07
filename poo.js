/*Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.


* Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
A classe "Aluno" deve ter um atributo adicional chamado "matricula".
Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.

* Modifique a classe "Pessoa" para que o atributo "idade" seja privado.
Crie métodos getters e setters para acessar e alterar o valor da idade, respeitando o encapsulamento.

* Crie uma classe chamada "Animal" com um método chamado "falar".
Crie classes específicas que herdem de "Animal" (por exemplo: "Cachorro", "Gato", etc.)
e sobrescrevam o método "falar" para exibir o som característico de cada animal.
*/

class animal {
  constructor(tipo, falar) {
    this.tipo = tipo;
    this.falar = falar;
  }
}

const animal1 = new animal("cachorro", "au au");
console.log(animal1);

/*
class conta {
  constructor(titular) {
    this.numero = "001";
    this.saldo = 0;
    this.titular = titular;
  }
}
*/

/*
const conta1 = new conta("Eu");
console.log(conta1)
const conta2 = new conta();
*/
/*class Veiculo{
  constructor(rodas, marca, cor, valor, escada){
    this.rodas = rodas;
    this.marca = marca;
    this.cor = cor;
    this.valor = valor;
    this.quilometragem = 0;
  }
}

const uno = new Veiculo(4, "fiat", "branco", 60000, true);

console.log(uno)

class Pessoa{
  constructor(nome, idade){
  this.nome = nome;
  this.idade = idade;
  }
}
*/
/*const pessoa1 = new Pessoa("Zé", 33);

console.log(pessoa1)
*/
/* Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console
uma mensagem com o nome e a idade da pessoa.
*/