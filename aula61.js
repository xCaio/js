// const Pessoa ={
//     nome: "Caio",
//     getNome: function(){
//         return this.nome
//     },
//     setNome: function(nome){
//         this.nome = nome
//     }
// }



// const p1 = Pessoa
// const p2 = Pessoa
// const p3 = Pessoa
// p1.nome = "oi"
// p2.nome = "obj literal"
// p2["nome"] = "muda todos" // Outro modo de fazer


// p3.setNome("Novo nome setado")
// Pessoa.setNome("Usando diretamente o Pessoa como objeto literal")


// console.log(p1.nome)
// console.log(p2.getNome())
// console.log(Pessoa.nome)
//PRATICA ABAIXO
/////////////////////////////////

const btn_add = document.querySelector("#btn_add")
let pessoas = []
const f_nome = document.querySelector("#f_nome")
const f_idade = document.querySelector("#f_idade")
const res = document.querySelector(".res")
const addPessoas = () => {
    res.innerHTML = ""
    pessoas.map((element) => {
        const pessoaNova = document.createElement("div")
        pessoaNova.setAttribute("class", "pessoa")
        pessoaNova.innerHTML = `Nome: ${element.nome}<br/>Idade: ${element.idade}`
        res.appendChild(pessoaNova)
    })

}

btn_add.addEventListener('click', (event) => {
    const Pessoa = {
        nome: "",
        idade: "",

        getNome: function () {
            return this.nome
        },
        setNome: function (nome) {
            this.nome = nome
        },
        getIdade: function () {
            return this.idade
        },
        setIdade: function (idade) {
            this.idade = idade
        }
    }
    const pessoa = Pessoa
    pessoa.nome = f_nome.value
    pessoa.idade = f_idade.value
    pessoas.push(pessoa)
    addPessoas()
    f_nome.value = ""
    f_idade.value = ""

    console.log(pessoas)




})






