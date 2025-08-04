function Pessoa(pnome, pidade){
        this.nome = pnome,
        this.idade = pidade,

    this.getNome = function(){
        return this.nome
    } ,
    this.getIdade = function(){
        return this.idade
    },
    this.setNome = function(nome){
        this.nome = nome
    },
    this.setIdade = function(idade){
        this.idade = idade
    },
    this.info = function(){
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