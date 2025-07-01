// definidos  - FOR
// indefinidos - WHILE e DO WHILE


// for(inicializacao ; condiçãoDeExecução; controle){
//     comandos ao serem iterados ao loop
// }
console.log("Inicio do Programa");

for(let indice = 0; indice< 10; indice++){
    if(indice % 2 == 0){
        console.log(`Numero Par: "${indice}"`)
    }else{
        console.log(`Número Impar: "${indice}"`)
    }
}
console.log("Fim do Programa");