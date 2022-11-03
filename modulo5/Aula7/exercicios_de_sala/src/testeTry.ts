const userInput=require("readline-sync")
let op=1

while(op!=0){

    let verPrimeiroNumero = false
    let verSegundoNumero = false

    let n1=userInput.question("Digite o primeiro numero:\n")
    let n2=userInput.question("Digite o segundo numero:\n")

    try{

        n1 = Number(n1);
        n2 = Number(n2);

        if (isNaN(n1))
            throw new Error("O valor do primeiro número é invalido!")            
        else
            verPrimeiroNumero = true

        if (isNaN(n2))
            throw new Error("O valor do segundo número é invalido!")            
        else
            verSegundoNumero = true

        
        if (verPrimeiroNumero && verSegundoNumero)
        {
            console.log("Os 2 valores são válidos")
            console.log(`A divisão de ${n1} por ${n2} é:`, n1/n2);
        }        
        else
            console.log("Existe ao menos 1 valor inválido, impossível prosseguir o código!")

            
const userInput=require("readline-sync")
let op=1

while(op!=0){

    let verPrimeiroNumero = false
    let verSegundoNumero = false

    let n1=userInput.question("Digite o primeiro numero:\n")
    let n2=userInput.question("Digite o segundo numero:\n")

    try{

        n1 = Number(n1);
        n2 = Number(n2);

        if (isNaN(n1))
            throw new Error("O valor do primeiro número é invalido!")            
        else
            verPrimeiroNumero = true

        if (isNaN(n2))
            throw new Error("O valor do segundo número é invalido!")            
        else
            verSegundoNumero = true
        

        if (verPrimeiroNumero && verSegundoNumero)
        {
            console.log("Os 2 valores são válidos")

            if (!isFinite(n1/n2))
                throw new Error("Impossível realizar divisão por zero!")            
            else
                console.log(`A divisão de ${n1} por ${n2} é:`, n1/n2);

        }        
        else
            console.log("Existe ao menos 1 valor inválido, impossível prosseguir o código!")
        


    }catch(err:any){
        console.log("Opa! Ocorreu um erro!", err.message);
    }

  
    op=userInput.question("Deseja continuar?\n 1 -> Sim\n 0 -> Nao\nOp: ")

}             

    }catch(err:any){
        console.log("Opa! Ocorreu um erro!", err.message);
    }

  
    op=userInput.question("Deseja continuar?\n 1 -> Sim\n 0 -> Nao\nOp: ")

} 