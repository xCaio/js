const pessoa = {
    nome: "Caio",
    idade: 20,
    aulas: {
        aula01: "oii",
        aula02: "oie"
    }
}

const converterParaJSON = JSON.stringify(pessoa)  // CONVERTE OBJETO (LITERAL) PARA JSON
console.log(converterParaJSON)

const jsonGerado = '{"nome":"Caio","idade":20,"aulas":{"aula01":"oii","aula02":"oie"}}'
console.log(jsonGerado)

const converterJSONparaObjeto = JSON.parse(jsonGerado) // CONVERTE JSON PARA OBJETO (LITERAL)
console.log(converterJSONparaObjeto)