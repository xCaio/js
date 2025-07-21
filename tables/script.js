let cursos = JSON.parse(localStorage.getItem("cursos")) || ["React", "HTML", "PostgreeSQL", "MariaDB", "Firebase"]

const table2 = document.querySelector("#table2")
const buscarBotao = document.querySelector("#buscarBotao")
const removerBotao = document.querySelector("#removerBotao")
const addButton = document.querySelector("#addButton")

function renderizarCursos() {
    table2.innerHTML = "" 
    cursos.forEach((element, id) => {
        const newElement = document.createElement("div")
        newElement.setAttribute("class", "curso")
        newElement.setAttribute("id", `c${id}`)
        newElement.innerHTML = element

        const radio = document.createElement("input")
        radio.setAttribute("type", "radio")
        radio.setAttribute("name", "radioSelect")

        newElement.appendChild(radio)
        table2.appendChild(newElement)
    })
}

renderizarCursos()

const selecionarCurso = () => {
    const allRadios = [...document.querySelectorAll("input[type=radio]")]
    let selecionarRadio = allRadios.filter((element) => {
        return element.checked
    })
    return selecionarRadio[0]
}

addButton.addEventListener('click', () => {
    const inputText = document.querySelector("#input")
    const saveText = inputText.value.trim()

    if (saveText === "") {
        alert("Digite um curso para adicionar.")
        return
    }

    cursos.push(saveText)
    localStorage.setItem("cursos", JSON.stringify(cursos))
    renderizarCursos()
    inputText.value = ""
})

removerBotao.addEventListener('click', () => {
    try {
        const sr = selecionarCurso()
        const cursoRemovido = sr.parentElement.textContent.trim()

        cursos = cursos.filter(curso => curso !== cursoRemovido)
        localStorage.setItem("cursos", JSON.stringify(cursos))

        renderizarCursos()

        alert(`O curso ${cursoRemovido} foi removido`)
    } catch (err) {
        alert("Selecione um curso")
    }
})

buscarBotao.addEventListener('click', () => {
    try {
        const sr = selecionarCurso()
        alert(`Você selecionou o curso: ${sr.parentElement.textContent}`)
    } catch (err) {
        alert("Selecione um curso")
    }
})
