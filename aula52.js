const caixa = document.querySelector("#caixa")
let cores = ["Vermelho", "Preto", "Roxo", ["Escuro", "Claro", "Medio"]]
let cursos = ["HTML", "CSS", "JAVASCRIPT", cores]

console.log(cursos[3][3][0])

cursos[0] = ("Node")

cursos.push("C++")
cursos.push("Python")
cursos.pop()
cursos.pop() //remove o ultimo elemento do array

cursos.unshift("Android Studio")
cursos.shift() // remove o primeiro elemento do array

cursos.map((element)=>{
    let p = document.createElement("p")
    p.innerHTML = element
    caixa.appendChild(p)
})


