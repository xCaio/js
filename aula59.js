class Pessoa{
    constructor(pnome, pidade){
        this.nome = pnome
        this.idade = pidade
    }
    getNome = ()=> this.nome
    getIdade = () => this.idade

    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
    info(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\n`)
    }
}

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")
let pessoas = []

const addPessoa = () =>{
    res.innerHTML = ""
    pessoas.map((element)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML= `Nome: ${element.getNome()}<br/>Idade: ${element.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', (event)=>{
const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")

const p = new Pessoa(nome.value, idade.value)
pessoas.push(p)
addPessoa()
nome.value = ""
idade.value = ""

})