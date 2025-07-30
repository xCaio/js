const caixa = document.querySelector("#caixa")


const mapa = new Map()

mapa.set("curso", "JavaScript")
mapa.set("aulas", "Todas")
mapa.set(1, "Primavera")
mapa.set(2, "Verão")


mapa.keys(mapa)
mapa.delete(2)


const pesquisa = "oi"
let resposta = ""
if(mapa.has(pesquisa)){
    resposta =`A chave existe na coleção com o valor ${mapa.get(pesquisa)}`
    resposta+=`<br/>O tamanho da coleção é: ${mapa.size}`
}else if(mapa.get(pesquisa) == undefined){
    let newC = mapa.set(pesquisa, "Pesquisa do usuário")
    resposta = `A chave acima não existia e foi criada com o valor: ${newC.get(pesquisa)}`
    resposta+=`<br/>O tamanho da coleção é: ${mapa.size}`
}
else{
    resposta="A chave não está na coleção e foi criada"
}

caixa.innerHTML = resposta


mapa.forEach((element)=>{
    console.log(element)
})

