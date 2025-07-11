let divTodas = [...document.getElementsByTagName("div")]
let cursosTodos = [...document.getElementsByClassName("curso")]
let cursosc1 = [...document.getElementsByClassName("c1")]
let cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")


const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosc1 = [...document.querySelectorAll(".c1,p")]
const query_cursosc2 = [...document.querySelectorAll(".c2")]
// const paragrafo = [...document.querySelectorAll("p")]
const divs_contendo_class = [...document.querySelectorAll("div[class]")]
const div_contendo_p = [...document.querySelectorAll("div > p")]

query_cursosc1.map((element) =>{
    console.log(element.innerHTML)
})
query_cursosc2.map((element) =>{
    console.log(element.innerHTML)
})

query_cursosc1.map((e) =>{
    e.classList.add("destaque")
})

// paragrafo.map((e)=>{
//     e.classList.add("destaque", "curso")
// })
console.log(divs_contendo_class)
console.log(div_contendo_p)
// query_cursosTodos.map((element) =>{
//     console.log(element.innerHTML)
// })

// for(i in cursosc1){
//     console.log(cursosc1[i])
// }
// console.log(`Curso especial: ${cursoEspecial.innerHTML}`)
// console.log(divTodas)

// cursosc2.map((el)=>{
//     el.classList.add("destaque")
// })