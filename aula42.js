const idades = [15,21,30,17,18,44,12,50]

const filtroMaiorValor = idades.filter((valor, indice, array)=>{
    return valor >=18 ?valor:""
})

const filtroIdadeMenor = idades.filter((value, index, array)=>{
    return value < 18? value:""
})


console.log(idades)
console.log(filtroMaiorValor)
console.log(filtroIdadeMenor)

// console.log(idades)