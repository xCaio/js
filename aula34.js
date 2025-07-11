let curso = [...document.querySelectorAll(".curso")]

curso.map((element)=>{
    element.addEventListener("click", (event)=>{
        let command = event.target
        command.classList.add("destaque")
        console.log(`${element.innerText} foi clicado`)
    })
})

// c1.addEventListener("click", (event)=>{
//     let command = event.target
//     command.classList.add("destaque")
//     console.log(command)

// })

const msg = () =>{
    alert("clicou")
}