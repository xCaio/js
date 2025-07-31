const caixa = document.querySelector("#caixa")

const curso = "JavaScript"
const eu = "Caio"

const frase =  `Olá, eu sou ${eu} e estou aprendendo ${curso}`

caixa.innerHTML=frase

const carros = ["Polo", "Golf", "T-Cross", "HRV"]

let ul = `<ul>`
carros.map((element)=>{
    ul+= `<li>${element} </li>`
})
ul+=`</ul>`

caixa.innerHTML+=ul


// caixa.innerHTML=listaCarros