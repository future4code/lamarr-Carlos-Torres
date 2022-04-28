
// Exercicio sobre interpretação de código
// Questão 1 letra a. Resposta: Será impresso Matheus Nachtergaele.

// Questão 2 letra a. Dentro do objeto terá um atributo chamado Nome que terá o valor Jubo.
// Questão 2 letra b. A sintaxe de 3 pontos (...) faz com que seja aproveitada a estrutura do objeto seguinte aos 3 pontos.

// Questão 3 letra a. Serão impressas as strings "backender" e "altura".
// Questão 3 letra b. Esses valores impressos no console ocorreram porque colchetes "[]" é referência à VETOR. 
//                                                                                       Vetor também é objeto!


// Exercício 1 A sobre escrita de código
console.log("Exercício 1 A sobre escrita de código")

let registro = {
    nome: "Carlos",
    apelidos: ["Beto", "Aintein", "Bebeto"]
}

let mostramensagem = function(objeto)
{
    return "Olá, meu nome é " + objeto.nome + ", mas pode me chamar de " + objeto.apelidos[0] + ", " + objeto.apelidos[1] + " ou " + objeto.apelidos[2] + "."
}

console.log( mostramensagem(registro) )


// Exercício 1 B sobre escrita de código.
console.log("Exercício 1 B sobre escrita de código")
let novo_objeto = {...registro, nome: "Carlos", apelidos: ["teste1", "teste2", "teste3"]}

console.log( mostramensagem(novo_objeto) )


// Exercício 2 A sobre escrita de código.
console.log("Exercício 2 A sobre escrita de código - criar 2 objetos")

let registroPrimeiro = {
    nome: "Carlos",
    idade: 23,
    profissao: "Professor"
}

let registroSegundo = {
    nome: "Arlei",
    idade: 34,
    profissao: "Enfermeiro"
}


// Exercício 2 B sobre escrita de código
console.log("Exercício 2 B sobre escrita de código")

let doisObjetos = function(objeto1)      // Função do exercício 3 sobre escrita de código  
{
    var exibirDados = []

    exibirDados[0] = objeto1.nome
    exibirDados[1] = objeto1.nome.length
    exibirDados[2] = objeto1.idade
    exibirDados[3] = objeto1.profissao
    exibirDados[4] = objeto1.profissao.length

    return exibirDados
}

console.log(doisObjetos(registroSegundo))


// Exercício 3 A sobre escrita de código - Criar variável de escopo global.
console.log("Exercício 3 A sobre escrita de código - criar variável de escopo global")
var varGlobalCarrinho = []


// Exercício 3 B sobre escrita de código
console.log("Exercício 3 B sobre escrita de código")

let fruta1 = {
    nome: "Mamão",
    disponibilidade: true,
}

let fruta2 = {
    nome: "Uva",
    disponibilidade: true,
}

let fruta3 = {
    nome: "Abacate",
    disponibilidade: true,
}


let guardaNoEstoque = function(objetoFruta)      // Função do exercício 3 - (C) sobre escrita de código  
{
    
    varGlobalCarrinho.push(objetoFruta)

}

guardaNoEstoque(fruta1)
guardaNoEstoque(fruta2)
guardaNoEstoque(fruta3)

console.log(varGlobalCarrinho)
