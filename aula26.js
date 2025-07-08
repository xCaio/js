// const somar = (...values) =>{
//     const retornaSoma = (valor) =>{
//         let resultado = 0
//         let total = valor.length
//         for(let i = 0; i< total; i++){
//             resultado+=valor[i]
//         }
//         return resultado
//     }
//     return retornaSoma(values)
    
// }
// console.log(somar(1,2,3,3))

const somaFacil = (...values) =>{
    const somando = (valor) =>{
        let armazenaResultado = 0
        for(v in valor){
            armazenaResultado += valor[v]
        }
        return armazenaResultado
    }
    return somando(values)
}

console.log(somaFacil(10,20,30))