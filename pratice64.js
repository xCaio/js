class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
    }
    getNome = () => this.nome
    getPortas = () => this.portas
    setNome(nome) {
        this.nome = nome
    }
    setPortas(portas) {
        this.portas = portas
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }
    getBlindagem(){
        return this.blindagem
    }  
    getMunicao(){
       return this.municao
    }
    setMunicao(municao) {
        this.municao = municao
    }
    setBlindagem(blindagem) {
        this.blindagem = blindagem
    }
}

const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")

const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_militar = document.querySelector("#f_militar")
const f_normal = document.querySelector("#f_normal")
const addBtn = document.querySelector("#add")
const res = document.querySelector(".res")
let carros = []

const removerCarro = (carro) =>{
    const index = carros.findIndex(element => element.getNome() === carro)
    if(index > -1){
        carros.splice(index, 1)
    }
}

const exibirCarros = () => {
    res.innerHTML = ""
    carros.map((element) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.setAttribute("data-name", element.getNome())
        const removerButton = document.createElement("button")
        removerButton.setAttribute("class", "remove")
        removerButton.innerHTML="REMOVER"

        removerButton.addEventListener('click', (event)=>{
            const removerElemento = event.target.parentNode.dataset.name
            removerCarro(removerElemento)
            exibirCarros()
        })

        div.innerHTML = `Nome: ${element.getNome()}<br/>Portas: ${element.getPortas()}`
        if (f_militar.checked && element instanceof Militar) {
            div.innerHTML += `<br/>Blindagem: ${element.getBlindagem()}<br/>Munição: ${element.getMunicao()}`
        }
        res.appendChild(div)
        div.appendChild(removerButton)




    })



}



addBtn.addEventListener('click', (event) => {
    const normal = new Carro(f_nome.value, f_portas.value)
    const militar = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)

    if (f_normal.checked) {
        carros.push(normal)
        f_nome.value = ""
        f_portas.value = ""
        exibirCarros()
    } else if (f_militar.checked) {
        carros.push(militar)
        f_nome.value = ""
        f_portas.value = ""
        f_blindagem.value = 0
        f_municao.value = 0
        exibirCarros()
    }


})


f_militar.addEventListener('click', (event) => {
    if (f_militar.checked) {
        f_blindagem.removeAttribute("disabled")
        f_municao.removeAttribute("disabled")

        f_blindagem.value = 0
        f_municao.value = 0
    }
})
f_normal.addEventListener('click', (event) => {
    if (f_normal.checked) {
        f_blindagem.setAttribute("disabled", "disabled")
        f_municao.setAttribute("disabled", "disabled")

        f_blindagem.value = 0
        f_municao.value = 0
    }
})

