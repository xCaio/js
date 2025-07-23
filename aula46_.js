const cursos = ["JAVA", "CSS", "HTML", "JQUERY", "MYSQL"]
const caixaCursos = document.querySelector("#caixaCursos")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarCursoAntes = document.querySelector("#btnAdicionarCursoAntes")
const btnAdicionarCursoDepois = document.querySelector("#btnAdicionarCursoDepois")
const indice = 0


const removerSelecionado = ()=>{
    const todosCursos = [...document.querySelectorAll(".selecionado")]
    const selecionado = todosCursos.map((element)=>{
        return element.classList.remove("selecionado")
    })
    return selecionado[0]
}

const criarNovoCurso = (curso)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id", `c${indice}`)
    newElement.setAttribute("class", `curso c1`)
    newElement.innerHTML = curso

    // const radio = document.createElement("input")
    // radio.setAttribute("type", "radio")
    // radio.setAttribute("name", "radioSelect")
    // newElement.appendChild(radio)
    newElement.addEventListener('click', (event)=>{
        const selecionar = event.target
        removerSelecionado()
        selecionar.classList.toggle("selecionado")
    })

    caixaCursos.appendChild(newElement)

    return newElement
}

cursos.map((element, id) => {
    const novoElemento = criarNovoCurso(element)
    caixaCursos.appendChild(novoElemento)
    // indice++
})

const selecionarCurso = () =>{
    const todosCursos = [...document.querySelectorAll(".selecionado")]
    const selecionarCurso = todosCursos.filter((element)=>{
        return element
    })
    return selecionarCurso[0]
}

btnRemoverCurso.addEventListener('click', (event)=>{
    const cs = selecionarCurso()
    try{
        alert(`${cs.textContent} removido`)
        cs.remove()
    }catch(err){
        alert("Selecione um curso para remover")
    }
})

btnCursoSelecionado.addEventListener('click', (event)=>{
    const cs = selecionarCurso()
    try{
        const cursoSelecionado = cs.textContent
        alert(`Curso Selecionado: ${cursoSelecionado}`)
    }catch(err){
        alert("Selecione um curso")
    }
})
btnAdicionarCursoAntes.addEventListener("click", (event)=>{
    const cs = selecionarCurso()
    const nomeCurso = document.querySelector("#nomeCurso")
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = cs
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
    const cs = selecionarCurso()
    const nomeCurso = document.querySelector("#nomeCurso")
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = cs
            caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), cursoSelecionado.nextSibling)
            nomeCurso.value = ""
        }else{
            alert("Digite o nome do curso a ser adicionado")
        }
    }catch(err){
        alert("Selecione um curso")
    }
})

