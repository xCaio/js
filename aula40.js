const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelectorAll(".curso")
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "React Native"]


cursos.map((element, id)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute(`id`, `c${id}`)
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML=element
    caixa1.appendChild(newElement)
})


newElement.setAttribute("id","c7")
newElement.setAttribute("class","curso c1")

// newElement.innerHTML="React Native"






// caixa1.appendChild(newElement)
