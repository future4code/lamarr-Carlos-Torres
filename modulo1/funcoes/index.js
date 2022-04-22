/* """""""""""""""""""""""""
Exercícios de interpretação de código
*************************** */
/*

a)
Minha função = 10
Minha função = 50

b) Executaria as duas funções; gereria os mesmos resultados: 10 e 50, só que apareceria 
NADA no console.

2)

a) Essa função recebe um texto digitado pelo usuário no parâmetro texto vindo da variável 
textoDoUsuario. Em seguida processa a informação do parâmetro texto de forma a converter o 
texto para minúsculo e inclui no fim a palavra "cenoura".

A utilidade é imprimir no console esse texto do usuário convertido e concatenado.

b) 
i) eu gosto de cenoura cenoura
ii) cenoura é bom pra vista cenoura
iii) cenouras crescem na terra cenoura

*/

/****************************** 
 * Exercíios de escrita de código
*****************************/

/* Área de variáveis */

texto = ""

primeiraEntradaDigitada = 0
segundaEntradaDigitada = 0

/* Área de funções */

let operacaoSoma = function(primeiraEntradaDigitada, segundaEntradaDigitada)
{
    return parseInt(primeiraEntradaDigitada) + parseInt(segundaEntradaDigitada)
}

let operacaoSubtracao = function(primeiraEntradaDigitada, segundaEntradaDigitada)
{
    return parseInt(primeiraEntradaDigitada) - parseInt(segundaEntradaDigitada)
}

let operacaoMultiplicacao = function(primeiraEntradaDigitada, segundaEntradaDigitada)
{
    return parseInt(primeiraEntradaDigitada) * parseInt(segundaEntradaDigitada)
}

let operacaoDivisao = function(primeiraEntradaDigitada, segundaEntradaDigitada)
{
    return parseInt(primeiraEntradaDigitada) / parseInt(segundaEntradaDigitada)
}

let operacaoRestoDivisao = function(primeiraEntradaDigitada, segundaEntradaDigitada)
{
    return parseInt(primeiraEntradaDigitada) % parseInt(segundaEntradaDigitada)
}

let QTCaracteresMaiuscula = function(texto)
{
    return "Essa mensagem possui " + texto.length + " caracteres e uma versão maiúscula é: " + texto.toUpperCase() + "."
}

let sePar = function(criticarNumero)
{
    if (criticarNumero % 2 == 0)
        return true
}

let primeiroMaior = function(primeiroNumero, segundoNumero)
{
    if (primeiroNumero >= segundoNumero)
        return true
}

let Soma2Numeros = function(primeiroNumero, segundoNumero)
{
    let VSoma = primeiroNumero + segundoNumero
    return VSoma
}

let DadosDePessoa = function(VNome, VIdade, VCidade, VProfissao)
{
    return "Eu sou " + VNome.trim() + ", tenho " + VIdade.toString() + " anos, moro em(no) "+ VCidade.trim() +" e sou " + VProfissao.trim() + " a noite. De dia trabalho em fábrica de ração."
}

let funcaoApresentacao = function()
{
    return "Eu sou Roberto, tenho 23 anos, moro no RS e sou estudante a noite. De dia trabalho em fábrica de ração."
}


/* Área de desenvolvimento de código e chamada das funções */

texto = funcaoApresentacao()
console.log(texto)

texto = DadosDePessoa("Carlos Torres", 48, "Rio de Janeiro", "garoto de programa da Labenu trabalhando na esquina")
console.log(texto)

console.log(Soma2Numeros(2,3))

if (primeiroMaior(1,2))
    console.log("O primeiro é maior ou igual ao segundo.")
else
    console.log("O segundo é maior.")

if(sePar(2))
    console.log("O número é par.")
else
    console.log("O número é ímpar.")

console.log(QTCaracteresMaiuscula("flamengo, octa campeão brasileiro!"))

primeiraEntradaDigitada = prompt(console.log("Insira o primeiro número:"), primeiraEntradaDigitada)
console.log(primeiraEntradaDigitada)

segundaEntradaDigitada = prompt(console.log("Insira o segundo número:"), segundaEntradaDigitada)
console.log(segundaEntradaDigitada)

console.log("**********************************************************************************************************")

console.log("Números inseridos:" + primeiraEntradaDigitada.toString() + " e " + segundaEntradaDigitada.toString() + ".")

console.log("Soma: " + operacaoSoma(primeiraEntradaDigitada, segundaEntradaDigitada).toString())
console.log("Diferença: " + operacaoSubtracao(primeiraEntradaDigitada, segundaEntradaDigitada).toString())
console.log("Multiplicação: " + operacaoMultiplicacao(primeiraEntradaDigitada, segundaEntradaDigitada).toString())
console.log("Divisão: " + operacaoDivisao(primeiraEntradaDigitada, segundaEntradaDigitada).toString())
console.log("Resto da divisão: " + operacaoRestoDivisao(primeiraEntradaDigitada, segundaEntradaDigitada).toString())

console.log("**********************************************************************************************************")
