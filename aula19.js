console.log("UTILIZANDO O BREAK PARA PARAR A APLICAÇÃO ")
// let n = 1
// let max = 1000
// while(n < 1000){
//     console.log(`Contador: ${n}`)
//     n++;
//     if(n > 10){
//         break;
//     }
// }
// console.log(n)


console.log("UTILIZANDO O CONTINUE PARA PARAR A ITERAÇÃO E CONTINUAR O CODIGO")
let n = 0 
let max = 1000
let pares = 0
let impares = 0

for(let i = n; i < max; i++){
    console.log(`Contagem: ${i}`)
    if(i % 2 != 0 ){
        continue // PULA PARA A PROXIMA ITERAÇÃO
    }
    pares++
    
}
console.log(`Total de números pares: ${pares}`)

// DUVIDAS RODAR O DEBUG