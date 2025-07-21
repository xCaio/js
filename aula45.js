const cursos = ["JAVA", "CSS", "HTML", "JQUERY", "MYSQL"]
const caixaCursos = document.querySelector("#caixaCursos")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarCursoAntes = document.querySelector("#btnAdicionarCursoAntes")
const btnAdicionarCursoDepois = document.querySelector("#btnAdicionarCursoDepois")
const indice = 0

const criarNovoCurso = (curso)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id", `c${indice}`)
    newElement.setAttribute("class", `curso c1`)
    newElement.innerHTML = curso

    const radio = document.createElement("input")
    radio.setAttribute("type", "radio")
    radio.setAttribute("name", "radioSelect")
    

    newElement.appendChild(radio)
    caixaCursos.appendChild(newElement)

    return newElement
}

cursos.map((element, id) => {
    const novoElemento = criarNovoCurso(element)
    caixaCursos.appendChild(novoElemento)
    // indice++
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
btnAdicionarCursoAntes.addEventListener("click", (event)=>{
    const sr = selecionarRadio()
    const nomeCurso = document.querySelector("#nomeCurso")
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = sr.parentNode
            console.log(cursoSelecionado)
            caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), cursoSelecionado)
            nomeCurso.value = ""
        }else{
            alert("Digite o nome do curso a ser adicionado")
        }
    }catch(err){
        alert("Selecione um curso")
    }
})

btnAdicionarCursoDepois.addEventListener("click", (event)=>{
    const sr = selecionarRadio()
    const nomeCurso = document.querySelector("#nomeCurso")
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = sr.parentNode
            caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), cursoSelecionado.nextSibling)
            nomeCurso.value = ""
        }else{
            alert("Digite o nome do curso a ser adicionado")
        }
    }catch(err){
        alert("Selecione um curso")
    }
})

