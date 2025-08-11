function Nave (energia) {
    this.energia = energia
    this.disparos = 100
}


const nave1 = new Nave(100)

// quando eu quiser adicionar membros, propriedades ou metodos que não foi criada inicialmente, irei usar o prototype

Nave.prototype.getEnergia=function(){
    return this.energia
}
Nave.prototype.setEnergia=function(energia){
    this.energia = energia
}


Nave.prototype.vidas = 3

Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

nave1.disparar()
nave1.disparar()
nave1.disparar()
nave1.disparar()
nave1.disparar()
nave1.disparar()
nave1.disparar()

console.log(Nave)
console.log(nave1)
console.log(nave1.disparos)

console.log(nave1.getEnergia())

nave1.setEnergia(50)
console.log(nave1.getEnergia())