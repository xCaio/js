const p_array = document.querySelector("#textArray")
const buscar = document.querySelector("#buscar")
const resultado = document.querySelector("#resultado")


const array = [11, 13, 15, 12, 25, 14, 16]
p_array.innerHTML = "[" + array + "]"


buscar.addEventListener('click', (event) => {
    const retorno = array.some((element) => {
        if (element >= 18) {
            resultado.innerHTML = `O valor ${element} é maior ou igual que 18`
        }
        return element >= 18
    })

})