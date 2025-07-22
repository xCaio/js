const cursos = ["JS", "REACT", "MYSQL", "POSTGREESQL"]
const caixaCursos = document.querySelector("#caixaCursos")
const caixaCursoSelecionado = document.querySelector("#caixaCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes")
const btnAdicionarDepois = document.querySelector("#btnAdicionarDepois")

const criarNovoCurso = (curso) => {
    const newElement = document.createElement("div")
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML = curso

    const radio = document.createElement("input")
    radio.setAttribute("type", "radio")
    radio.setAttribute("name", "btnRadio")

    newElement.appendChild(radio)
    caixaCursos.appendChild(newElement)
    return newElement

}

cursos.map((element, id) => {
    criarNovoCurso(element)
})

const selectRadio = () => {
    const allRadios = [...document.querySelectorAll("input[type=radio]")]
    let selectRadio = allRadios.filter((element) => {
        return element.checked
    })
    return selectRadio[0]
}

btnAdicionarAntes.addEventListener('click', (event) => {
    const nomeCursoInput = document.querySelector("#nomeCurso").value
    if (nomeCursoInput != "") {
        const sr = selectRadio()
        if (sr != undefined) {
            const novo = criarNovoCurso(nomeCursoInput)
            caixaCursos.insertBefore(novo, sr.parentElement)
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
        const sr = selectRadio()
        if(sr != undefined){
            const novo = criarNovoCurso(nomeCursoInput)
            caixaCursos.insertBefore(novo, sr.parentElement.nextSibling)
        }else{
            alert("Selecione um curso")
        }
    }else{
        alert("Digite algo")
    }

})

btnRemoverCurso.addEventListener('click', (event) => {
    try {
        const rs = selectRadio()
        rs.parentElement.remove()
    } catch (err) {
        alert("Selecione um curso para remover")
    }
})

caixaCursoSelecionado.addEventListener('click', (event) => {
    try {
        const rs = selectRadio()
        alert(`Seleciondo ${rs.parentElement.textContent}`)
    } catch (err) {
        alert("Selecione um curso")
    }

})
