const cursos = ["JS", "REACT", "MYSQL", "POSTGREESQL"]
const caixaCursos = document.querySelector("#caixaCursos")
const caixaCursoSelecionado = document.querySelector("#caixaCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes")
const btnAdicionarDepois = document.querySelector("#btnAdicionarDepois")

const tirarSelecao = () =>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    let tirar = cursoSelecionado.filter((element)=>{
        element.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso) => {
    const newElement = document.createElement("div")
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML = curso
    
    newElement.addEventListener('click', (event)=>{
        tirarSelecao()
        event.target.classList.toggle("selecionado")
    })
    
    caixaCursos.appendChild(newElement)
    return newElement

}

cursos.map((element, id) => {
    criarNovoCurso(element)
})

const cursoSelecionado = () => {
    const allCursos = [...document.querySelectorAll(".selecionado")]
    let selectCurso = allCursos.filter((element) => {
        return element
    })
    return selectCurso[0]
}


btnAdicionarAntes.addEventListener('click', (event) => {
    const nomeCursoInput = document.querySelector("#nomeCurso").value
    if (nomeCursoInput != "") {
        const cs = cursoSelecionado()
        if (cs != undefined) {
            const novo = criarNovoCurso(nomeCursoInput)
            caixaCursos.insertBefore(novo, cs)
            nomeCursoInput.value = ""
        } else {
            alert("Selecione um curso")
        }
    } else {
        alert("Digite algo")
    }
})

btnAdicionarDepois.addEventListener('click', (event)=>{
    const nomeCursoInput = document.querySelector("#nomeCurso").value
    if(nomeCursoInput != ""){
        const cs = cursoSelecionado()
        if(cs != undefined){
            const novo = criarNovoCurso(nomeCursoInput)
            caixaCursos.insertBefore(novo, cs.nextSibling)
        }else{
            alert("Selecione um curso")
        }
    }else{
        alert("Digite algo")
    }

})

btnRemoverCurso.addEventListener('click', (event) => {
    try {
        const cs = cursoSelecionado()
        cs.remove()
    } catch (err) {
        alert("Selecione um curso para remover")
    }
})

caixaCursoSelecionado.addEventListener('click', (event) => {
    try {
        const cs = cursoSelecionado()
        alert(`Seleciondo ${cs.textContent}`)
    } catch (err) {
        alert("Selecione um curso")
    }

})
