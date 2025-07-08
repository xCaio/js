const soma = (... values) => {
    const somando=(valor)=>{
        let res = 0
        for(i of valor){
            res+= i
        }
        return res
    }
    return console.log(somando(values))
}

soma(1,2,2)