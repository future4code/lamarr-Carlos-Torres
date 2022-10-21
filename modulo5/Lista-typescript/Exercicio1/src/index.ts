console.log("Hello world!")

function RecebeNomeEData(vNome: string, vData:string) {

    let vDataQuebrada = vData.split("/", 3)

    console.log(vDataQuebrada)

    //"Olá me chamo {vNOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"

    console.log(`Olá me chamo {vNOME}, nasci no dia {vDataQuebrada(0)} do mês de {vDataQuebrada(1)} do ano de {vDataQuebrada(2)}`)

}

RecebeNomeEData("Carlos","10/08/2022")
