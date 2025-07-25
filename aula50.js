const p_array = document.querySelector("#textArray")
const btnReduzir = document.querySelector("#btnReduzir ")
const resultado = document.querySelector("#resultado")


const array = [1,2,3,4,5]
p_array.innerHTML = "[" + array + "]"

let ant = []
let atu = []

btnReduzir.addEventListener('click', (event) => {
    const retorno = array.reduce((anterior, atual, pos)=>{
        ant.push(anterior)
        atu.push(atual)
        return anterior+atual
    })
    resultado.innerHTML=`${retorno}<br/>Anterior: ${ant} <br/> Atual: ${atu}`

})