let cursosTodos = [...document.getElementsByClassName("curso")]
let cursosc1 = [...document.getElementsByClassName("c1")]
let cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[0]

for(i in cursosc1){
    console.log(cursosc1[i])
}
console.log(`Curso especial: ${cursoEspecial.innerHTML}`)

cursosc2.map((el)=>{
    el.classList.add("destaque")
})