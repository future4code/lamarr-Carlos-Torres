
/* Questões teóricas

    1 - *****************************
	    a. false
    	b. false
	    c. true
    	b. boolean
        *****************************

    2 - 	O operador "+" serve para concatenar valores.
          Será impresso no console, o valor digitado e armazenado na variável primeiroNumero 
          junto (concatenado) ao valor digitado na variável segundoNumero.

    3 - Para a solução da situação anterior, eu sugeriria ao amigo que para a soma, use a 
    função PARSEINT(variavel) para converter o que o sistema enxergaria como string para 
    número. Havendo previsão de se utilizar valores não inteiros, eu sugiro a função 
    PARSEFLOAT().

*/


/*Questão 1
idadeUsuario = 10
idadeMelhorAmigue = 20

idadeUsuario = prompt(console.log("Qual a sua idade?"), idadeUsuario)
console.log(idadeUsuario)

idadeMelhorAmigue = prompt(console.log("Qual idade do seu melhor amigo(e)?"), idadeMelhorAmigue)
console.log(idadeMelhorAmigue)

console.log("A sua idade é maior que a do seu melhor amigo?", true)
console.log("A diferença de idade é: ", parseInt(idadeUsuario) - parseInt(idadeMelhorAmigue))


//Questão 2
numeroPar = 2

numeroPar = prompt(console.log("Digite um número par:"), numeroPar)

console.log("Resto da divisão desse número por 2: ", parseInt(numeroPar % 2))

// O padrão que ocorreu quando digito um número par é que o resto é sempre ZERO!
// Quando digito um númro ímpar, o resto dá sempre 1.



// Questão 3
idadeEmAnos = 0

idadeEmAnos = prompt(console.log("Digite a sua idade em anos:"), idadeEmAnos)

idadeEmMeses = idadeEmAnos * 12
console.log("Idade em meses: ", parseFloat(idadeEmMeses))

idadeEmDias = idadeEmMeses * 365
console.log("Idade em dias: ", parseFloat(idadeEmDias))

idadeEmHoras = idadeEmDias * 24
console.log("Idade em dias: ", parseFloat(idadeEmHoras))

*/

// Questão 4
primeiroNumeroDigitado = 0
segundoNumeroDigitado = 0

primeiroNumeroDigitado = prompt(console.log("Digite o 1º número:"), primeiroNumeroDigitado)
seguBndoNumeroDigitado = prompt(console.log("Digite o 2º número:"), segundoNumeroDigitado)


console.log("O primeiro numero é maior que segundo? ", true)
console.log("O primeiro numero é igual ao segundo? ", true)
console.log("O primeiro numero é divisível pelo segundo? ", true)
console.log("O segundo numero é divisível pelo primeiro? ", true)
