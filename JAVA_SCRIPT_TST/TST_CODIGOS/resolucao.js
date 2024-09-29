console.log('Resultando do Exercicio');
const primeiraVariavel = 2148;
let segundaVariavel;

console.log(`O valor da primeira variavel é : ${primeiraVariavel}`);

segundaVariavel = 23;

console.log(`Minha segunda variavel é: ${segundaVariavel}`);
console.log(`a Soma é: ${primeiraVariavel + segundaVariavel}`);
segundaVariavel = segundaVariavel **2;
console.log(segundaVariavel);
segundaVariavel = segundaVariavel / 3;
console.log(segundaVariavel);

const booleana1 = true;
const booleana2 = false;

console.log(`${booleana1 && booleana2}`);
console.log(`${booleana1 || booleana2}`);

const booleana3 = false;
console.log(`${booleana1 && booleana2 && booleana3}`);
console.log(`${booleana1 || booleana2 || booleana3 }`);
const traco = 'tst'
const vez = 80
console.log(traco * 80);

const arrayNumber = [1, 2, 3, 4, 5];

console.log(arrayNumber);

const Pessoa = {
    nome:"Fulano",
    idade: 30,
    profissao: "Programador",
    endereco: "Rua 1, 123",
    telefone: "1234567890",
};

function pergarComanda(){
    console.log("Ola Boa noite");
    console.log("Pegue sua comanda aqui");
    console.log("Bom apetite!!!");
    console.log("-----------------------------------");
    }

console.log(Pessoa);
console.log(Pessoa.profissao);
console.log(Pessoa['endereco']);

pergarComanda();

function calcularQuadrado(numeroDaVez) {
    const lado = 5;
    const area = lado ** lado;
    console.log(`O numero da vez é o :${numeroDaVez}`)
    console.log(`O numero da vez (${numeroDaVez}) ao Quadrado vale ${numeroDaVez **2}`);
    console.log('-----------------------------------------------------');
}

calcularQuadrado(1);
calcularQuadrado(2);
calcularQuadrado(3);
calcularQuadrado(4);

let casa = {
    cor: "Azul",
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamanhoTotalCasaM2: function() { 
        const tamanhoTotal = casa.sala + casa.cozinha + casa.banheiro + casa.quarto;
        console.log(`O tamanho da casa é de ${tamanhoTotal}`);
        return tamanhoTotal;
    },
}

casa.calcularTamanhoTotalCasaM2()


function calcularSquareRoot(radicand){
    return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2){
    const sum = side1 ** 2 + side2 ** 2;
    return calcularSquareRoot(sum);
}

console.log(`A hipotenusa de um triangulo de lados 3 e 4 é: ${calculatePythagoras(3, 4)}`)