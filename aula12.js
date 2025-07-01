// SPREAD OPERATOR

let n1 = [10, 20, 30]
let n2 = [11,22,33,44]

console.log(...n1,...n2);

const player1 = {name: "Caio", life: 100, stamina: 100, magic: 80}
const player2 = {name: "Nay", life: 100, velocity: 79}
const player3 = {...player2,...player1} 
console.log(player3);


const soma = (v1,v2,v3) => {
    return v1+v2+v3
}

let valores = [3,5,1,]

console.log(soma(...valores)); // Com o Spread não retorna undefined, espalha cada valor para cada parametro de entrada da função soma


const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]
console.log(objs1) // HTMLCollections só recebe elementos HTML
console.log(objs2) // Array de elementos HTML, posso adicionar outros tipos de elementos que não é HTML

// objs1.    // descomentar para ver a diferença dos métodos para utilizar
// objs2.    // descomentar para ver a diferença dos métodos para utilizar

objs2.forEach(element =>{
    element.innerHTML += "Alterado"

})

objs1.forEach(element =>{
    console.log(element)
})  // ERROR
    