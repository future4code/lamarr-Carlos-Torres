
// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()



/* vteste = ""
vteste = prompt("Veja se já selecionou uma área")

if(vteste != "")
{

    addEventListener('pointerup', e => {
    const selection = window.getSelection();
  
    console.log(selection)

  })

} */

// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
}

// EXERCÍCIO 02 - pros professores da Labenu verem o que a engenharia faz com a nossa cabeça!
/* function retornaArrayInvertido(array) {

    var arrayFinal = []

    var repeticoesLacos = array.length

    for(repeticoesLacos; repeticoesLacos >= 1; repeticoesLacos --)
        arrayFinal[array.length - repeticoesLacos] = array[repeticoesLacos-1]

    return arrayFinal
}
*/ 


// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    array.reverse()

    return array
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    //array.sort()

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    var arrayFinal = []

    var indiceArray = 0
    var novoIndice = -1

    for(indiceArray = 0; indiceArray <= array.length-1; indiceArray++)
    {
        if(array[indiceArray] % 2 == 0)
        {
            novoIndice++
            arrayFinal[novoIndice] = array[indiceArray]
        }
    }

    return arrayFinal
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
    var arrayFinal = []

    var indiceArray = 0
    var novoIndice = -1

    for(indiceArray = 0; indiceArray <= array.length-1; indiceArray++)
    {
        if(array[indiceArray] % 2 == 0)
        {
            novoIndice++
            arrayFinal[novoIndice] = array[indiceArray] ** 2
        }
    }

    return arrayFinal
  
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    var maiorNumero = array[0]
    
    for(indiceArray = 1; indiceArray <= array.length-1; indiceArray++)
    {
        if(array[indiceArray] > maiorNumero)
            maiorNumero = array[indiceArray]
    }
    
    return maiorNumero
    
}


function retornaMaiorNumeroDeDois(num1, num2) {

    if(num1 > num2)
    {
        maiorNumero = num1
        menorNumero = num2
    }
    else
    {
        maiorNumero = num2
        menorNumero = num1
    }

    return maiorNumero
    
}

function retornaMenorNumeroDeDois(num1, num2) {

    if(num1 < num2)
    {
        menorNumero = num1
        maiorNumero = num2
    }
    else
    {
        menorNumero = num2
        maiorNumero = num1
    }

    return menorNumero
    
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    var maiorDivideMenor = false

    var maiorDeDois = retornaMaiorNumeroDeDois(num1, num2)
    var menorDeDois = retornaMenorNumeroDeDois(num1, num2)

    diferencaMaiorMenor = maiorDeDois - menorDeDois

    if(maiorDeDois % menorDeDois == 0)
        maiorDivideMenor = true

    let armario = 
    {
        maiorNumero: maiorDeDois,
        maiorDivisivelPorMenor: maiorDivideMenor,
        diferenca:diferencaMaiorMenor
    }
    
    return armario
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) 
{

    var vetPares = []
    var indiceVetPares = -1
    var valorDividendo = -1
    var lacoInfinito = Boolean

    lacoInfinito = true

    for(valorDividendo = 0; valorDividendo <= n*10; valorDividendo++)
    {

        if(valorDividendo % 2 == 0)
        {        
            indiceVetPares = indiceVetPares + 1

            if(indiceVetPares == n)
                break

            vetPares[indiceVetPares] = valorDividendo

        }

    }

    return vetPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) 
{

    if (ladoA == ladoB && ladoA == ladoC && ladoC == ladoB)
    {
        return "Equilátero"
    }

    if ((ladoA == ladoB && ladoA != ladoC) || (ladoB == ladoC && ladoB != ladoA) || (ladoC == ladoA && ladoC != ladoB))
    {
        return "Isósceles"
    }


    if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC)
    {
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    varAuxiliar = 0

    for(i=0; i<=array.length-1; i++)
    {
        for (j=1; j<=array.length-1; j++)
        {            

          if (Number(array[i]) > Number(array[j]))
          {
            varAuxiliar = array[i]
            array[i] = array[j]
            array[j] = varAuxiliar
          }  

        }
    }
    
    var arrayFinal = [2]

    arrayFinal[0] = array[array.length -2]
    arrayFinal[1] = array[1]    

    return arrayFinal
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    return "Venha assistir ao filme " + filme.nome + ", de " + filme.ano.toString() + " dirigido por " + filme.diretor + " e estrelado por " + filme.atores[0] + ", " + filme.atores[1] + ", " + filme.atores[2] + ", " + filme.atores[3] + "."

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
