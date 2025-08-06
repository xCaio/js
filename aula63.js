class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
    }
    getNome() {
        return this.nome
    }
    setNome(nome) {
        this.nome = nome
    }
    getPortas() {
        return this.portas
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
    getBlindagem() {
        return this.blindagem
    }
    setBlindagem(blindagem) {
        this.blindagem = blindagem
    }
    getMunicao() {
        return this.municao
    }
    setMunicao(municao) {
        this.municao = municao
    }
}
const f_militar = document.querySelector("#f_militar")
const f_normal = document.querySelector("#f_normal")

const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const resultado = document.querySelector(".res")

f_militar.addEventListener('click', (event) => {
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_normal.addEventListener('click', (event) => {
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
    f_blindagem.value = 0
    f_municao.value = 0
})

const adicionar = document.querySelector("#add")

const carros = []

const addCarro = () => {
    resultado.innerHTML = ""
    carros.map((element) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        
        let html = `Nome: ${element.getNome()}<br/>Portas: ${element.getPortas()}`
        
        if(element instanceof Militar){
            html+= `</br>Blindagem: ${element.getBlindagem()}<br/>Munição: ${element.getMunicao()}`
        }
        
        div.innerHTML = html
        resultado.appendChild(div)
            
        
    })
}

adicionar.addEventListener('click', (event) => {
    const nome = document.querySelector("#f_nome")
    const portas = document.querySelector("#f_portas")
    if (f_militar.checked) {
        const militar = new Militar(nome.value, portas.value, Number(f_blindagem.value), Number(f_municao.value))
        carros.push(militar)
        addCarro()
        nome.value = ""
        portas.value = ""
        f_blindagem.value=0
        f_municao.value=0
        
    } else {
        const carro = new Carro(nome.value, portas.value)
        carros.push(carro)
        addCarro()
        nome.value = ""
        portas.value = ""

    }

})