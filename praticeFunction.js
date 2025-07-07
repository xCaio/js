function soma(...values){
    let total = values.length
    let resultado = 0
    for(i = 0; i < total; i++){
        resultado+=values[i]
    }    
    return resultado
}

console.log(soma(1,2,3,4))

function somaForIn(...values){
    let res = 0
    for(i in values){
        res += values[i]
    }
    return res
}
console.log(somaForIn(1,2,3,4))


function soma(...values){
    let res = 0
    for(i of values){
        res+= i
    }
    return res
}
console.log(soma(1,2,3,4))