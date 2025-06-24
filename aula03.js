"use strict"
//let, var, const

function teste(){
    let nome = "Caio"
    if(true){
        console.log("Dentro do IF do teste: " + nome)
    }
    console.log("Dentro do teste: " + nome)

}

teste()

// console.log("Fora de teste: " + nome)

const curso = "JavaScript"
console.log("Curso: " + curso)
curso = "Python" // This will throw an error because curso is a constant