const todosCursos = [...document.querySelectorAll(".curso")]
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_transferir")

console.log(todosCursos)

todosCursos.map((element)=>{
    element.addEventListener('click', (event)=>{
        const evento = event.target
        evento.classList.toggle("selecionado")
    })
})

btn.addEventListener('click', (event)=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    selecionados.map((element)=>{
        if(element.parentElement===caixa1){
            caixa2.appendChild(element)
        }else if(element.parentElement===caixa2){
            caixa1.appendChild(element)
        }
        element.classList.remove("selecionado")
    })
})