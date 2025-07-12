const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener('click', (event)=>{
    console.log("Clicou")
    console.log(event.target)
})

// btn_c1.addEventListener('click', (event)=>{
//     event.stopPropagation()
// })

cursos.map((element)=>{
    element.addEventListener('click', (event)=>{
        event.stopPropagation()
    })
})