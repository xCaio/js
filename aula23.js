function somaFor(...valores){
    let tamanho = valores.length
    let resultado = 0
    for(let v = 0; v < tamanho; v++){
        resultado+= valores[v]
    }
    return resultado

}
console.log(somaFor(10,20,30))


function somaForIn(...valores){
    let restultado_final = 0
    for(i in valores){
        restultado_final+=valores[i]
    }
    return restultado_final
}

console.log(somaForIn(1,2,3))

function somaForOf(...valores){
    let resultado=0
    for(v of valores){
        resultado+=v
    }
    return resultado
}

console.log(somaForOf(1,2,3,4))