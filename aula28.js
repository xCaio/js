// const cursos = ["HTML", "CSS", "JS", "REACT", "PHP"]

const c = cursos.map((el, i) =>{
    return `Elemento: ${el} do Índice: ${i}`
})
console.log(c)

let cursos = document.getElementsByTagName("div")
cursos = [...cursos]

cursos.map((el, i)=>{ // el é o elemento do array ou coleção, i é o indice do array ou coleção
    console.log(`Curso ${el.innerHTML} | Índice: ${i}`)
})
const val = Array.prototype.map.call(cursos, ({innerHTML})=> innerHTML)

console.log(val)


const converterInt = (e) =>parseInt(e)
const dobrarvalor = (e) => e*2

let numeros=["1", "2", "3", "4", "5"]

console.log(numeros.map(converterInt))
console.log(numeros.map(dobrarvalor))
console.log(numeros.map(somando, converterInt))