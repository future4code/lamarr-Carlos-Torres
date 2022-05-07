/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("♣ ♥ ♦ ♠ *********************************** ♣ ♥ ♦ ♠") + String.fromCharCode(13)
    console.log("♣ ♥ ♦ ♠ ************* ♣ ♥ ♦ ♠ ************* ♣ ♥ ♦ ♠")
    console.log("♣ ♥ ♦ ♠   Bem vindo ao jogo de brackjack!   ♣ ♥ ♦ ♠") + String.fromCharCode(13)
    console.log("♣ ♥ ♦ ♠ ************* ♣ ♥ ♦ ♠ ************* ♣ ♥ ♦ ♠")
    console.log("♣ ♥ ♦ ♠ *********************************** ♣ ♥ ♦ ♠") + String.fromCharCode(13)
    
    String.fromCharCode(13)
    String.fromCharCode(13)
    String.fromCharCode(13)
    String.fromCharCode(13)
    String.fromCharCode(13)
    String.fromCharCode(13)
    
    if(confirm("Podemos iniciar o jogo?")) 
    {
    
        alert("Iniciando a rodada...")
    
       /*******************************************************
       Aqui eu armazeno e exibo a carta e o valor do usuário
       *******************************************************/
    
       const cartaUsuario = comprarCarta();
       // Sorteando uma carta para o usuário...
       
       console.log("Usuário    - cartas: " + cartaUsuario.texto + " - pontuação: " + cartaUsuario.valor.toString())
    
       /*******************************************************
       Aqui eu armazeno e exibo a carta e o valor do computador
       *******************************************************/
      
       const cartaComputador = comprarCarta(); 
       // Sorteando uma carta para o usuário...
       
       console.log("Computador - cartas: " + cartaComputador.texto + " - pontuação: " + cartaComputador.valor.toString())
    
       String.fromCharCode(13)
       String.fromCharCode(13)
       String.fromCharCode(13)
       
       /*******************************************************
       Aqui exibo o vencedor desta rodada
       *******************************************************/
       console.log("♣ ♥ ♦ ♠ *********************************** ♣ ♥ ♦ ♠") + String.fromCharCode(13)
       
       String.fromCharCode(13)
       
       if(cartaUsuario.valor > cartaComputador.valor)
          console.log("Parabéns, você é o vencedor!  ;)")
       else if(cartaUsuario.valor == cartaComputador.valor)
          console.log("Houve empate! :0")
       else
          console.log("Você foi vencido pelo sistema! :( ")
       
       String.fromCharCode(13)
       
       console.log("♣ ♥ ♦ ♠ *********************************** ♣ ♥ ♦ ♠") + String.fromCharCode(13)
       
    } 
    else
        alert("O jogo acabou!")