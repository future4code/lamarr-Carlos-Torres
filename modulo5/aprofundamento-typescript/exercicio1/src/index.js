console.log("Olá");
var minhaString = "2";
console.log(minhaString);
var meunumero = 1;
console.log(meunumero);
var coresPossiveis;
(function (coresPossiveis) {
    coresPossiveis["primeiracor"] = "VERMELHO";
    coresPossiveis["segundacor"] = "LARANJA";
    coresPossiveis["terceiracor"] = "AMARELO";
    coresPossiveis["quartacor"] = "VERDE";
    coresPossiveis["quintacor"] = "AZUL";
    coresPossiveis["sextacor"] = "ANIL";
    coresPossiveis["setimacor"] = "VIOLETA";
})(coresPossiveis || (coresPossiveis = {}));
var usuario1 = {
    nome: "Carlos",
    idade: 48,
    corfavorita: coresPossiveis.sextacor
};
var usuario2 = {
    nome: "Angelica",
    idade: 42,
    corfavorita: coresPossiveis.quintacor
};
var usuario3 = {
    nome: "Renato",
    idade: 46,
    corfavorita: coresPossiveis.primeiracor
};
