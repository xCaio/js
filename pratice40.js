const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "JavaScript","Teste"]


cursos.map((element, id)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id",`c${id}`)
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML=element
    caixa1.appendChild(newElement)
})