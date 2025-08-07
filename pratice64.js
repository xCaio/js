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
const f_militar = document.querySelector("#f_militar")
const f_normal = document.querySelector("#f_normal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const adicionar = document.querySelector("#add")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const resultado = document.querySelector(".res")

let carros = []

const removerCarro = (carro) =>{
    const index = carros.indexOf(carro)
    if(index > -1){
        carros.splice(index, 1)
    }
}

const exibirCarros = ()=>{
    resultado.innerHTML=""
    carros.map((element)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        const btnRemover = document.createElement("button")
        btnRemover.setAttribute("class", "remove")
        btnRemover.innerHTML="REMOVER"

        btnRemover.addEventListener('click', (event)=>{
            removerCarro(element)
            exibirCarros()
        })

        div.innerHTML=`Nome: ${element.getNome()}<br/>Portas: ${element.getNome()}`
        if(element instanceof Militar){
            div.innerHTML+= `<br/>Blindagem: ${element.getBlindagem()}<br/>Munição: ${element.getMunicao()}`
        }

        resultado.appendChild(div)
        div.appendChild(btnRemover)
    })
}


f_militar.addEventListener('click', (event)=>{
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
    f_blindagem.value=0
    f_municao.value=0
})

f_normal.addEventListener('click', (event)=>{
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
    f_blindagem.value=0
    f_municao.value=0
})

adicionar.addEventListener('click', (event)=>{
    if(f_normal.checked){
        const carroNormal = new Carro(f_nome.value, f_portas.value)
        carros.push(carroNormal)
        exibirCarros()
        f_nome.value = ""
        f_portas.value = ""
        
    }
    if(f_militar.checked){
        const carroMilitar = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        carros.push(carroMilitar)
        exibirCarros()
        f_nome.value = ""
        f_portas.value = ""
        f_blindagem.value = 0
        f_municao.value = 0
    }
})





