const cursos = ["HTML","CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const caixaCursos = document.querySelector("#caixaCursos")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
cursos.map((element, id)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id", `c${id}`)
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML=element
    
    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")
    
    const radio = document.createElement("input")
    radio.setAttribute("type", "radio")
    radio.setAttribute("name", "rb_curso")


    newElement.appendChild(comandos)
    comandos.appendChild(radio)
    caixaCursos.appendChild(newElement)
    
})

btnCursoSelecionado.addEventListener('click', (event)=>{
        const todosRadios = [...document.querySelectorAll("input[type=radio]")]
        let radioSelecionado = todosRadios.filter((element)=>{
            return element.checked
        })
        
        radioSelecionado=radioSelecionado[0]
        const cursoSelecionado = radioSelecionado.parentNode.parentNode.textContent
        alert(`Curso Selecionado: ${cursoSelecionado}`)

        console.log(cursoSelecionado)



    })