// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
//     getNome = () => this.nome
//     getIdade = () => this.idade
//     setNome(nome) {
//         this.nome = nome
//     }
//     setIdade(idade) {
//         this.idade = idade
//     }
// }

// const btn_add = document.querySelector("#add")
// let arrayPessoas = []
// const resultado = document.querySelector(".resultado")
// const addPerson = () => {
//     resultado.innerHTML= ""
//     arrayPessoas.map((element) => {
//         const div = document.createElement("div")
//         div.setAttribute("class", "pessoa")
//         div.innerHTML = `Nome: ${element.getNome()}<br/>Idade: ${element.getIdade()}`
//         resultado.appendChild(div)
//     })

// }


// btn_add.addEventListener('click', (evt) => {
//     const nome = document.querySelector("#f_nome")
//     const idade = document.querySelector("#f_idade")

//     const pessoa = new Pessoa(nome.value, idade.value)
//     arrayPessoas.push(pessoa)
//     addPerson()
//     nome.value = ""
//     idade.value = ""
// })

//LITERAL OBJECTS
const btn_add = document.querySelector("#add")
const resultado = document.querySelector(".resultado")
let arrayPessoas = []
const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")


const createPerson = () => {
    resultado.innerHTML = ""
    arrayPessoas.map((element) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${element.getNome()}<br/>Idade: ${element.getIdade()}`
        resultado.appendChild(div)
    })

}
btn_add.addEventListener('click', (event) => {
    const Pessoa = {
        nome: "",
        idade: "",
        getNome: function(){
            return this.nome
        },
        getIdade: function (){
            return this.idade
        },
        setNome: function (nome) { this.nome = nome },
        setIdade: function (idade) { this.idade = idade }
    }
    const pessoa = Pessoa
    pessoa.setNome(nome.value)
    pessoa.setIdade(idade.value)
    arrayPessoas.push(pessoa)
    createPerson()
    nome.value = ""
    idade.value = ""

})