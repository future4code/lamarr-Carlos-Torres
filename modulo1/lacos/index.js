/* 

1) 4


2)	

    a) 19; 21; 23; 25; 27; 30

	b) Sim, for... of é suficiente! poderia ser usado o for... of e 
	   uma variável contadora que somasse de 0 até o lenght do array 
	   lista -1. Desse índice gerado através da variável, usa-se a 
	   variável como índice do array.

		Ex.: 	lista[ variável contadora ].

           Dessa forma, conseguiríamos acessar o valor que encontra-se 
	   denro de cada índice do array.


3) Será impresso: 

			****** ****** ****** ****** ******

 */

/* ***********************************************************
 * Questões de escrita de código
 * ***********************************************************/

// 1)

console.log("Programa de PETS")

var qtdPets = 0
var nomePets = ""
var continuaLacos = true
vetorPets = Array

qtdPets = prompt("Quantos bichos de estimação tu tens?", qtdPets)

if (qtdPets == 0)
{

    console.log("Que pena, você pode adotar um! ;) ")

}

else

{

    continuaLacos = true
    indiceLacos = 0
    while(continuaLacos)
    {

        nomePets = prompt("Ótimo! :) Quais os respectivos nomes? Caso termine de digitar, digite <vazio>", nomePets)
        
        if(nomePets.trim() == "" || indiceLacos > qtdPets-1)
        {
            continuaLacos = false
        }
        else
            vetorPets[indiceLacos] = nomePets


        indiceLacos = indiceLacos + 1

    }

}

for(i=0; i < qtdPets; i++)
    console.log (vetorPets[i])


console.log ("Fim do programa de PETS!")
 
// 2

console.log("Programa de ARRAYS DE NÚMEROS - CADA VALOR DO ARRAY ORIGINAL")

// a)
var arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let funcaoMostrarVetorOriginal = function(vetorOriginal)
{
    var contadorIndices = 0
    var lacoinfinito = true

    while(lacoinfinito)
    {

        if(contadorIndices <= vetorOriginal.length-1)
        {
            console.log("contador " + contadorIndices.toString() + " Valor: " + vetorOriginal[contadorIndices].toString())
        }
        else
        {
            lacoinfinito = false 
        }

        contadorIndices ++

    }
}

funcaoMostrarVetorOriginal(arrayOriginal)


// b)

console.log("Programa de ARRAYS DE NÚMEROS - CADA VALOR DO ARRAY ORIGINAL DIVIDIDO POR 10")

let funcaoMostrarVetorOriginalDiv10 = function(vetorOriginal)
{
    var contadorIndices = 0
    var lacoinfinito = true

    while(lacoinfinito)
    {

        if(contadorIndices <= vetorOriginal.length-1)
        {
            console.log("contador " + contadorIndices.toString() + " Valor: " + (vetorOriginal[contadorIndices]/10).toString())
        }
        else
        {
            lacoinfinito = false 
        }

        contadorIndices ++

    }
}

funcaoMostrarVetorOriginalDiv10(arrayOriginal)


//c)

console.log("Programa de ARRAYS DE NÚMEROS - NÚMEROS PARES")

let funcaoMostrarParesVetorOriginal = function(vetorOriginal)
{
    var contadorIndices = 0
    var lacoinfinito = true
    var paresVetorOriginal = Array
    var contaVetorPares = 0

    while(lacoinfinito)
    {


        if(contadorIndices <= vetorOriginal.length-1)
        {
            if(vetorOriginal[contadorIndices] % 2 == 0)
            {

                paresVetorOriginal[contaVetorPares] = vetorOriginal[contadorIndices]

                contaVetorPares = contaVetorPares + 1

            }

        }
        else
        {
            lacoinfinito = false 
        }

        contadorIndices ++

    }

    for(i=0; i <= contaVetorPares; i++)
        console.log (paresVetorOriginal[i])

}

funcaoMostrarParesVetorOriginal(arrayOriginal)


//d)

console.log("Programa de ARRAYS DE NÚMEROS - STRINGS FORMATADAS")

let funcaoMostrarStringMensagens = function(vetorOriginal)
{
    var contadorIndices = 0
    var lacoinfinito = true

    var vetorMensagens = Array

    while(lacoinfinito)
    {

        if(contadorIndices <= vetorOriginal.length-1)
        {
            vetorMensagens[contadorIndices] = console.log("O elemento do índice " + contadorIndices.toString() + " é : " + (vetorOriginal[contadorIndices]).toString())
        }
        else
        {
            lacoinfinito = false 
        }

        contadorIndices ++

    }

    for(i=0; i <= contadorIndices -1; i++)
        console.log (vetorMensagens[i])

}

funcaoMostrarStringMensagens(arrayOriginal)


//e)

console.log("Programa de ARRAYS DE NÚMEROS - O MAIOR E O MENOR NÚMERO DO ARRAY")

let funcaoMostrarMaiorMenor = function(vetorOriginal)
{
    var contadorIndices = 0
    var lacoinfinito = true

    var vetorMensagens = Array

    var maiorNumero = vetorOriginal[contadorIndices] 
    var menorNumero = vetorOriginal[contadorIndices]

    while(lacoinfinito)
    {

        if(contadorIndices <= vetorOriginal.length-1)
        {

            if(vetorOriginal[contadorIndices] > maiorNumero)
            {
                maiorNumero = vetorOriginal[contadorIndices]
            }
            

            if(vetorOriginal[contadorIndices] < menorNumero)
            {
                menorNumero = vetorOriginal[contadorIndices]
            }

        }
        else
        {
            lacoinfinito = false 
        }

        contadorIndices ++

    }

    console.log("O maior número é: " + maiorNumero + ".")

    console.log("O menor número é: " + menorNumero + ".")

}

funcaoMostrarMaiorMenor(arrayOriginal)

console.log("FIM DO EXERCÍCIO")
