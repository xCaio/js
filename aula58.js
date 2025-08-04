class Carro {
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo==1){
            this.tipo = "Esportivo"
            this.velmax = 200
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 160
        }else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 140
        }else{
            this.tipo = "Militar"
            this.velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    setNome(nome){
        this.nome = nome
    }
    getTipo(){
        return this.tipo
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    getVelMax(){
        return this.velmax
    }
    setVelMax(velmax){
        this.velmax = velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    

    info(){
        console.log(`Nome: ${this.nome}\nVel.Máx: ${this.velmax}\nTipo: ${this.tipo}\n`)
    }
}

let c1 = new Carro("Porsche", 1)
let c2 = new Carro("Luxo ", 2)
let c3 = new Carro("Nanico", 3)
let c4 = new Carro("Caveirão", 4)

// c1.info()
// c2.info()
// c3.info()

console.log(c1.getNome())
console.log(c2.getTipo())
console.log(c3.getVelMax())

console.log(c1.getInfo()[0])

c1.setNome("Golzinho")
c1.setVelMax(500)
console.log(c1.getInfo())