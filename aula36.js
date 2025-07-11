// ESTE CODIGO É O DO PROFESSOR, O MEU ESTÁ NA AULA35.js

const todosCursos = [...document.querySelectorAll(".curso")]
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_transferir = document.querySelector("#btn_transferir")


todosCursos.map((element) =>{
    element.addEventListener('click', (event) =>{
        const curso = event.target
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener('click', ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})