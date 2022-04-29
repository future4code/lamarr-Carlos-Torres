console.log("Hello world! My name is Carlos Torres.")

let turnoEstudante = ""

/* 

  1 - 

  a) No código é pedido um número ao usuário e desse número é verificado o módulo
     "RESTO DA DIVISÃO". Caso esse valor seja zero, é informado que o usuário passou 
    no teste, caso contrário é informado que o usuário não passou no teste.

  b) Ele imprime no console que passou no teste quando os tipos numéricos que sejam pares.

  c) A mensagem de que não passou no teste serve para números ímpares.

  2 - 

  a) O código acima serve para exibir o valor da fruta escolhida.

  b) Se a fruta for maçã, a mensagem que será impressa no console será:

      "O preço da fruta maçã é R$ 2.25"

  c) O preço do ítem pêra viria errado, pois como não houve o BREAK o código continuou executando.

  3 - 

  a) A primeira linha do código pede a entrada de algum valor (número) pelo usuário.

  b) 
  
         Considerando a digitação do número 10, será impresso no console: 
  
                           "Esse número passou no teste"
                           "Essa mensagem é secreta!!!"

         Considerando a digitação do número -10, será impresso no console: 
  
                           "Esse número passou no teste"
                           "Essa mensagem é secreta!!!"

  c) De acordo com a estrutura condicional IF, caso na primeira execução do programa 
     seja digitado -10, não será verdadeira na decisão da estrutura e não entrará no IF 
     consequantemente a variável mensagem não terá a mensagem que a classifica como variável 
     do tipo string. Isso acarretará um uma variável indefinida. Caso o primeiro valor seja 10,
     entrará na estrutura IF por se tratar de uma condição verdadeira e não ocasionará o erro, 
     visto que por ter recebido uma string, a variável MENSAGEM se tornou do tipo string.

*/

console.log("Rotina para verificar habilitação à direção")
idadeUsuario = Number(prompt("Qual idade do usuário?"))

if (idadeUsuario >= 18)
{
    console.log("Você pode dirigir!")
}
else
    console.log("Você não pode dirigir!")


console.log("Rotina para verificar o turno em que o aluno estuda")
turnoEstudante = prompt("Em qual turno você estuda? (M/V/N)")

if(turnoEstudante == "M")
{
    console.log("Turno matutino")
}
else if(turnoEstudante == "V")
    console.log("Turno vespertino")
else if (turnoEstudante == "N")
    console.log("Turno noturno!")
else
    console.log("Opção inválida! Tem que ser M/V/N")



console.log("QUESTÃO 3 - Rotina para verificar o turno em que o aluno estuda usando switch case")
turnoEstudante = prompt("Em qual turno você estuda? (M/V/N)")

switch (turnoEstudante) {
        case 'M':
            
            console.log("Turno matutino")
            break;
    
        case 'V':
            
            console.log('Turno vespertino');
            break;
    
        default:
    
            console.log('Turno noturno');
            break;
    }

var generoFilme
var valorFilme

console.log("QUESTÃO 4 - Rotina para verificar o gênero e valor do filme")
generoFilme = prompt("Qual gênero do filme você asistirá?")

valorFilme = parseFloat(prompt("Qual o valor do filme você asistirá?"))


if (analisandoEstadosFilmes(generoFilme, valorFilme))
{
    console.log("Bom filme")
}
else
{
    console.log("Escolha outro filme")
}


function analisandoEstadosFilmes(generoFilme, valorFilme)
{

    var retornoDaFuncao
    var variavelFantasia

    retornoDaFuncao = false
    variavelFantasia = false

    switch (generoFilme) {
        case 'Aventura':
            
            console.log("Aventura")
            break;
    
        case 'Biográfico':
            
            console.log('Biográfico');
            break;
    
        case 'Comédia':
            
            console.log('Comédia');
            break;
        
        case 'Comédia dramática':
            
            console.log('Comédia dramática');
            break;
    
        case 'Comédia romântica':
            
            console.log('Comédia romântica');
            break;
    
        case 'Histórico':
            
            console.log('Histórico');
            break;
        
        case 'Drama':
            
            console.log('Drama');
            break;
                    
        case 'Fantasia':
            
            console.log("Fantasia")
            variavelFantasia = true
            break;
    
        default:
    
            console.log('Gênero não catalogado!');
            break;
    }

    if(variavelFantasia)
    {
        if(valorFilme < 15) 
            retornoDaFuncao = true
    }

    return retornoDaFuncao    

}
