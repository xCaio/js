// quando defino um membro como static estou dizendo que o membro pertence a classe e não as instancias da classe
class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info(){
        console.log(`Energia: ${this.energia}\nAlerta: ${Npc.alerta?"Sim":"Não"}\n____________`)
    }
    static alertar = () =>{
        this.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)

Npc.alertar()

npc1.info()
npc2.info()
npc2.info()