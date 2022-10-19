console.log("Olá")
const minhaString: string = "2"
console.log(minhaString)
const meunumero: any = 1
console.log(meunumero)

//Regra
type person={
    nome:string,
    idade:number,
    corfavorita:string
}

type tipodefinido=person

enum coresPossiveis{
    primeiracor="VERMELHO",
    segundacor="LARANJA",
    terceiracor="AMARELO",
    quartacor="VERDE",
    quintacor="AZUL",
    sextacor="ANIL", 
    setimacor="VIOLETA",
}

const usuario1:tipodefinido={
    nome:`Carlos`,
    idade:48,
    corfavorita:coresPossiveis.sextacor
}

const usuario2:tipodefinido={
    nome:`Angelica`,
    idade:42,
    corfavorita:coresPossiveis.quintacor
}

const usuario3:tipodefinido={
    nome:`Renato`,
    idade:46,
    corfavorita:coresPossiveis.primeiracor
}

