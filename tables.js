// PRATICE

const tabela1 = document.querySelector("#tabela1")
const tabela2 = document.querySelector("#tabela2")
const btn = document.querySelector(".btn")
const itens = [...document.querySelectorAll(".item")]

itens.map((e)=>{
    e.addEventListener('click', (event)=>{
        event.target.classList.toggle("select")
    })
})
btn.addEventListener('click', (event)=>{
    const selecionados = [...document.querySelectorAll(".select")]
    selecionados.map((e)=>{
        if(e.parentElement===tabela1){
            tabela2.appendChild(e)
        }else if(e.parentElement === tabela2){
            tabela1.appendChild(e)
        }
        e.classList.remove("select")
    })
})