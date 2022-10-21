//console.table("Hello world!!!")

//Triângulos

//npm install readline-sync
const userInput=require("readline-sync")

    //Verifique se será necessário a instalação de mais alguma dependência 
    //como a que está abaixo:
    //             npm i --save-dev @types/node




console.log("**********************************************")
console.log("Exercídio 1")
console.log("**********************************************")

  function checaTriangulo(a:number, b:number, c:number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }   
const vResposta=checaTriangulo(10,10,30)
console.log(vResposta)


console.log("**********************************************")
console.log("Exercídio 2")
console.log("**********************************************")

function imprimeTresCoresFavoritas() {
  //const cor1 = prompt("Insira sua primeira cor favorita")
  //const cor2 = prompt("Insira sua segunda cor favorita")
  //const cor3 = prompt("Insira sua terceira cor favorita")

  let cor1: string
  cor1 = userInput.question("Insira sua primeira cor favorita")
  
  let cor2: string
  cor2 = userInput.question("Insira sua segunda cor favorita")
  
  let cor3: string
  cor3 = userInput.question("Insira sua terceira cor favorita")
  
  console.log([cor1, cor2, cor3])
}
const vRespostaCor = console.log(imprimeTresCoresFavoritas())


console.log("**********************************************")
console.log("Exercídio 3")
console.log("**********************************************")

function checaAnoBissexto(ano:number) {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}

const VRespostaBissexto = console.log(checaAnoBissexto(2023))



console.log("**********************************************")
console.log("Exercídio 4")
console.log("Verificando a difernça entre 2 números:")
console.log("**********************************************")

let vprimeironumero: number
vprimeironumero = userInput.question("Insira o primeiro número:")

let vsegundonumero: number
vsegundonumero = userInput.question("Insira o segundo número:")

function comparaDoisNumeros(num1:number, num2:number) {

  let maiorNumero;
  let menorNumero;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca = maiorNumero - menorNumero;

  return diferenca 
}

console.log(comparaDoisNumeros(vprimeironumero, vsegundonumero))


console.log("**********************************************")
console.log("Exercídio 5")
console.log("**********************************************")

let vAnoAtual: number
vAnoAtual = userInput.question("Insira o ano atual:")

let vAnoNascimento: number
vAnoNascimento = userInput.question("Insira o ano de nascimento:")

let vAnoEmissaoCarteira: number
vAnoEmissaoCarteira = userInput.question("Insira o ano de emissão da carteira:")

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number) {
  let idade = anoAtual - anoNascimento
  let tempoCarteira = anoAtual - anoEmissao
 
   if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
    }else if(idade >= 20 || idade <= 50) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
    }else if(idade > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
     }else {
         return "error"
     }
 }
 
console.log(checaRenovacaoRG(vAnoAtual, vAnoNascimento, vAnoEmissaoCarteira))

