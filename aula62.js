class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar() {
        this.ligado = true
    }
    desligar() {
        this.ligado = false
    }
    setCor(cor) {
        this.cor = cor
    }
}
class Militar extends Carro {
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    
    atirar(){
        if(this.municao > 0){
            this.municao--
        }
    }

}
class Utilitario extends Carro{
    constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares = lugares
        this.setCor("Padrão")
    }
}

const c1 = new Carro("Normal", 4)
const c2 = new Militar("Fortão", 6, 100, 50)
const c3 = new Utilitario("Espaçoso", 4,6)
c2.setCor("Vermelho")

c1.setCor("Vermelho")
c1.ligar()
c2.atirar()

console.log(`
   +---------------------------------
   + Nome: ${c1.nome}
   + Portas:${c1.portas}
   + Ligado: ${(c1.ligado?"Sim":"Não")}
   + Velocidade:${c1.vel}
   + Cor: ${c1.cor}
   +---------------------------------
    `)
console.log(`
   +---------------------------------
   + Nome: ${c2.nome}
   + Portas:${c2.portas}
   + Ligado: ${(c2.ligado?"Sim":"Não")}
   + Velocidade:${c2.vel}
   + Cor: ${c2.cor}
   + Blindagem: ${c2.blindagem}
   + Munição: ${c2.municao}
   +---------------------------------
    `)
console.log(`
   +---------------------------------
   + Nome: ${c3.nome}
   + Portas:${c3.portas}
   + Lugares:${c3.lugares}
   + Ligado: ${(c3.ligado?"Sim":"Não")}
   + Velocidade:${c3.vel}
   + Cor: ${c3.cor}
   +---------------------------------
    `)