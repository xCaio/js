class Pessoa {
    constructor(pNome){
        this.nome = pNome
    }
}

// let p1 = new Pessoa()
let p1 = new Pessoa("Caio")
let p2 = new Pessoa("Santos")
let p3 = new Pessoa("Celestino")
let p4 = new Pessoa(10)
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
console.log(p4.nome)
