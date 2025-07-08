const soma=(...values)=>{
    const somando =(valor)=>{
        let resultado = 0
        for(i in valor){
            resultado+= valor[i]
        }
        return resultado
    }
    return somando(values)
}

console.log(soma(1,3,2,2))