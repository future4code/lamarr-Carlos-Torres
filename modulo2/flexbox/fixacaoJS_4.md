
function contaOcorrencias(arrayDeNumeros, numeroEscolhido)
{

    var contadorOcorrencias
    var contadorIndices

    contadorOcorrencias = 0

    for (contadorIndices = 0; contadorIndices <= arrayDeNumeros.length-1; contadorIndices++)
    {
        if (arrayDeNumeros[contadorIndices] == numeroEscolhido)
            contadorOcorrencias = contadorOcorrencias + 1
    }

    if(contadorOcorrencias > 0)
    {
      // Cuidando da concordância verbal
      if(contadorOcorrencias == 1)
        return "O número " + numeroEscolhido.toString() + " aparece 1x"
      else
        return "O número " + numeroEscolhido.toString() + " aparece " + contadorOcorrencias.toString() + "x"
    }
    else
        return "Número não encontrado"
}

//var arrayDeNumerosTeste = [1,4,8,2,5,4,2,4,7,5]
//console.log(contaOcorrencias(arrayDeNumerosTeste, 3))


