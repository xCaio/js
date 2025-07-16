const cursos = ["JAVA", "CSS", "HTML", "JQUERY", "MYSQL"]
const caixaCursos = document.querySelector("#caixaCursos")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
cursos.map((element, id) => {
    const newElement = document.createElement("div")
    newElement.setAttribute("id", `c${id}`)
    newElement.setAttribute("class", `curso c1`)
    newElement.innerHTML = element

    const radio = document.createElement("input")
    radio.setAttribute("type", "radio")
    radio.setAttribute("name", "radioSelect")
    

    newElement.appendChild(radio)
    caixaCursos.appendChild(newElement)
})

const selecionarRadio = () =>{
    const AllRadios = [...document.querySelectorAll("input[type=radio]")]
    const selectRadio = AllRadios.filter((element)=>{
        return element.checked
    })
    return selectRadio[0]
}

btnRemoverCurso.addEventListener('click', (event)=>{
    const sr = selecionarRadio()
    try{
        const remover = sr.parentElement
        remover.remove()
        alert(`${sr.parentElement.textContent} removido`)
    }catch(err){
        alert("Selecione um curso para remover")
    }


})

btnCursoSelecionado.addEventListener('click', (event)=>{
    const sr = selecionarRadio()
    try{
        const cursoSelecionado = sr.parentNode.textContent
        alert(`Curso Selecionado: ${cursoSelecionado}`)
    }catch(err){
        alert("Selecione um curso")
    }

    
})

