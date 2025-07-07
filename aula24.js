// const f = function(...values){
//     let res = 0
//     for(i in values){
//         res+= values[i]
//     }
//     return res
// }

// console.log(f(10,2))

const f = new Function("n1","n2","n3", "return n1+n2+n3") // Função construtor anônimo

console.log(f(1,11,3))