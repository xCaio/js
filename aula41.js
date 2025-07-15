const cursos = ["JAVA", "NODE", "JS", "MySQL"]
const caixa1 = document.querySelector("#caixa1")

cursos.map((e, id)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id", `c${id}`)
    newElement.setAttribute("class", `curso c1`)
    newElement.innerHTML=e

    const btn = document.createElement("img")
    btn.setAttribute("src", "./icons8-lixeira-50.png")
    btn.setAttribute("class", "trash__icon")
    btn.setAttribute("id", `c${id}`)

    btn.addEventListener("click", (event)=>{
        
        caixa1.removeChild(event.target.parentNode)
    })


    newElement.appendChild(btn)
    caixa1.appendChild(newElement)

})

