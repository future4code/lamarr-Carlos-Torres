// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// Declaração de variáveis



// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
  }
  
  // EXERCÍCIO 0B
  function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')
  
    console.log(mensagem)
  }
  
  // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
  
  // EXERCÍCIO 01
  function calculaAreaRetangulo() {
    // implemente sua lógica aqui

    alturaRetangulo = 10
    larguraRetangulo = 10

    prompt("Insira a altura do retângulo:", alturaRetangulo)

    prompt("Insira a largura do retângulo:", larguraRetangulo)

    console.log (parseInt(alturaRetangulo) * parseInt(larguraRetangulo))

  }

  // calculaAreaRetangulo() - funcionou
  
  // EXERCÍCIO 02
  function imprimeIdade() 
  {
    // implemente sua lógica aqui

    anoAtual = 2022
    anoNascimento = 1973

    prompt("Insira o ano atual:", anoAtual)

    prompt("Insira o ano do nascimento:", anoNascimento)

    console.log (parseInt(anoAtual) - parseInt(anoNascimento))

  }
  
  // imprimeIdade()  - Funcionando!

  // EXERCÍCIO 03
  function calculaIMC(peso, altura) {
    // implemente sua lógica aqui

    prompt("Insira o peso (Kg):", peso)

    prompt("Insira o altura em metros:", altura)

    return parseInt(peso) / parseInt(altura * altura)

  }

  // calculaIMC() - Está funcionando!
  
  // EXERCÍCIO 04
  function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
    nomeUsuario = ""
    idadeUsuario = 0
    emailUsuario = ""

    nomeUsuario = prompt("Insira o seu nome:", nomeUsuario)

    idadeUsuario = prompt("Insira a sua idade:", idadeUsuario)
    
    emailUsuario = prompt("Insira o seu email:", emailUsuario)
    
    console.log("Meu nome é " + nomeUsuario + ", tenho " + idadeUsuario + " anos, e o meu email é " + emailUsuario + ".")

  }

  // imprimeInformacoesUsuario() - forcei execução para teste e a função funcionou!
  
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui

    
    corFavorita1 = ""
    corFavorita2 = ""
    corFavorita3 = ""
    let registroCores
    registroCores = ["","",""]

    corFavorita1 = prompt("Insira sua primeira cor favorita:", corFavorita1)

    corFavorita2 = prompt("Insira sua segunda cor favorita:", corFavorita2)

    corFavorita3 = prompt("Insira sua terceira cor favorita:", corFavorita3)

    registroCores[0] = corFavorita1
    registroCores[1] = corFavorita2
    registroCores[2] = corFavorita3

    console.log("A 1ª cor favorita é : " + registroCores[0] + ", a 2ª é " + registroCores[1] + " e a 3ª é " + registroCores[2] + ".")

  }

  // imprimeTresCoresFavoritas() - Funcionou!
  
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
  
    return string.toUpperCase()

  }
  
  // console.log(retornaStringEmMaiuscula("serei DEV em breve!")) - Funcionou

  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui

    qtdIngressosPraShowPostivo = 0

    qtdIngressosPraShowPostivo = custo / valorIngresso

    return qtdIngressosPraShowPostivo

  }
  
  
  // console.log(calculaIngressosEspetaculo(3000, 300)) - Funcionou!


  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui

    if (string1.length == string2.length)
        return true
    else
        return false

  }

// console.log(checaStringsMesmoTamanho("abc", "abcd")) - Ok

  
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
  
    return array[0]

  }

  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
    // implemente sua lógica aqui

    return array[array.lenght - 1]
  
  }
 
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui

    primeiroElemento = array[0]
    ultimoElemento = array[array.lenght - 2]
    auxElemento = primeiroElemento

    array[0] = ultimoElemento
    array[array.lenght - 1] = auxElemento

    return array

  }
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
  
    if (string1.toUpperCase() == string2.toUpperCase())
    {
        return true
    }
    else
    {
        return false
    }

  }
  
  // EXERCÍCIO 13
  function checaRenovacaoRG() {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
  
  }