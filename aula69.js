class CarroPadrao {
    constructor() {
        // Classes Abstratas
        if (this.constructor == CarroPadrao) {
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if (this.ligar == undefined) {
            throw TypeError("É obrigatório implementar o método ligar")
        }
        if (this.desligar == undefined) {
            throw TypeError("É obrigatório implementar o método desligar")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao {
    constructor(tipo, estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = "normal"
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = "utilitario"
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = "esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info() {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo.pot)
        console.log(this.portas)
        console.log(this.rodas)
        console.log(this.ligado)
        console.log("-------------------")

    }
    ligar() {
        this.ligado = true

    }
    desligar() {
        this.ligado = false
    }
}

class Turbo {
    constructor(estagio) {
        if (estagio == 0) {
            this.pot = 0
        } else if (estagio == 1) {
            this.pot = 50
        } else if (estagio == 2) {
            this.pot = 75
        } else if (estagio == 3) {
            this.pot = 100
        }
    }
}
class CarroEspecial extends Carro {
    constructor(estagio) {
        super(4, estagio)
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro Especial"
        this.informacao = 0 // desliga e liga
    }
    info() {
        if (this.informacao == 1) {
            super.info() // chama o info do pai e não sobrescreve
        } else {
            console.log(`Tipo: ${this.nome}`)
            console.log(`Velocidade Máxima: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.pot}`)
            console.log(`Rodas: ${this.rodas}`)
            console.log(`Portas: ${this.portas}`)
            console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`)
            console.log("-------------------")
        }

    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)


c1.info()
c2.info()
c3.ligar()
c3.info()
// const c4 = new CarroPadrao()