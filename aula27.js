function* cores(){
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value) // undefined


function* perguntas(){
    const nome = yield 'Qual é seu nome?'
    const esporte = yield 'Qual o seu esporte favorito?'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Caio").value)
console.log(itp.next("Futebol").value)

function* contador(){
    for(let i = 0; i< 10; i++){
        yield `Contando: ${i}`
    }  
    return i
}
const iterarc = contador()

console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)
console.log(iterarc.next().value)