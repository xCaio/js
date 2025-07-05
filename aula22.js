const VALOR_PADRAO = 3

let valor = 2
console.log(`Inicio do Valor: ${valor}`)
function add(v){
    valor+=v
}
add(14)
console.log(`Após adicionar o valor: ${valor}`)

add(13)
console.log(`Após adicionar outro valor: ${valor}`)

function soma(n1=VALOR_PADRAO,n2=VALOR_PADRAO){  //default value is 3 for two parameters
    let res = console.log(n1+n2)
    return res
}
// soma(12)