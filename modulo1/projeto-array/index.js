/*
EXERCÍCIOS TEÓRICOS

a. ""
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9

2 - SUBI NUM ÔNIBUS EM MIRROCOS.

*/

/* EXERCÍCIOS PRÁTICOS */

// Questão 1

nomeUsuario = ""
emailUsuario = ""
tarefaDoDia = ""
comidaPreferida = ""
indiceDaTarefa = 0

const listaDeComidas = ["Churrasco", "Camarão", "Pizza", "Estrogonofe", "Chocolate"]

nomeUsuario = prompt(console.log("Qual o seu Nome?"), nomeUsuario)
console.log(nomeUsuario)

emailUsuario = prompt(console.log("Qual o seu email?"), emailUsuario)
console.log(emailUsuario)

//Questão 2
//a
console.log("Array completo: " + listaDeComidas)

//Questão 2
//b
console.log("O email do usuário " + emailUsuario + " foi cadastrado com sucesso! Seja bemvindo " + nomeUsuario + ".")

console.log("Esses são meus pratos preferidos (uma em cada linha):")
console.log(listaDeComidas[0])
console.log(listaDeComidas[1])
console.log(listaDeComidas[2])
console.log(listaDeComidas[3])
console.log(listaDeComidas[4])

//Questão 2
//c
console.log("Esses eram meus pratos preferidos: " + listaDeComidas)
comidaPreferida = prompt(console.log("Digite uma comida preferida:"), comidaPreferida)
listaDeComidas.splice(1,1,comidaPreferida)
comidaPreferida[1] = comidaPreferida
console.log("Esses são meus pratos preferidos: " + listaDeComidas)


//Questão 3

//Questão a
const listaDeTarefas = ["", "", ""]

//Questão b
tarefaDoDia = prompt(console.log("Primeira tarefa do dia:"), tarefaDoDia)
listaDeTarefas[0] = tarefaDoDia
//Questão b
tarefaDoDia = prompt(console.log("Segunda tarefa do dia:"), tarefaDoDia)
listaDeTarefas[1] = tarefaDoDia
//Questão b
tarefaDoDia = prompt(console.log("Terceira tarefa do dia:"), tarefaDoDia)
listaDeTarefas[2] = tarefaDoDia

//Questão c
console.log("Esses são as tarefas do dia: " + listaDeTarefas)

//Questão d
indiceDaTarefa = prompt(console.log("Índice da tarefa 0; 1 ou 2:"), indiceDaTarefa)
console.log("Tarefa que você já realizou:", listaDeTarefas[indiceDaTarefa])

//Questão e
console.log("Como o array era: " + listaDeTarefas)
listaDeTarefas.splice(indiceDaTarefa, 1)

//Questão f
console.log("Como o array ficou: " + listaDeTarefas)

