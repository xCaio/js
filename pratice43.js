const cursos = ["JAVA", "CSS", "HTML", "JQUERY", "MYSQL"]
const caixaCursos = document.querySelector("#caixaCursos")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")

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

btnCursoSelecionado.addEventListener('click', (event)=>{
    const AllRadios = [...document.querySelectorAll("input[type=radio]")]
    let selectRadio = AllRadios.filter((element)=>{
        return element.checked
    })
    selectRadio = selectRadio[0]

    const cursoSelecionado = selectRadio.parentNode.textContent
    alert(`Curso Selecionado: ${cursoSelecionado}`)
})