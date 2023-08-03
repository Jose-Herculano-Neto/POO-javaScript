class conta {
  constructor(titular) {
    this.numero = "001";
    this.saldo = 0;
    this.titular = titular;
  }
}

const conta1 = new conta("Eu");
console.log(conta1)
const conta2 = new conta();

class Veiculo{
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

const pessoa1 = new Pessoa("Zé", 33);

console.log(pessoa1)