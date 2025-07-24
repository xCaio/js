const p_array = document.querySelector("#textArray")
const buscar = document.querySelector("#buscar")
const resultado = document.querySelector("#resultado")


const array = [11, 13, 15, 12, 9, 18, 16]
p_array.innerHTML = "[" + array + "]"


buscar.addEventListener('click', (event) => {
    resultado.innerHTML = `Elemento não equivale as condições`
    const retorno = array.some((element, index) => {
        if (element >= 18) {
            resultado.innerHTML = `O valor ${element} é maior ou igual que 18 na posição ${index+1}`
        }
        return element >= 18
    })

})