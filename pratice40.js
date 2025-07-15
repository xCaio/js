const cursos = ["JAVA", "REACT", "CSS", "TYPESCRIPT", "TTGAMES EH BOBO"]
const caixa1 = document.querySelector("#caixa1")


cursos.map((e, id)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id", `c${id}`)
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML=e
    caixa1.appendChild(newElement)


})


