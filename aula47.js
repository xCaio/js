const array = [10, 3, 5, 11, 14]
const p_array = document.querySelector("#textArray")
const inputText = document.querySelector("#inputText")
const resultado = document.querySelector("#resultado")
const buscar = document.querySelector("#buscar")
p_array.innerHTML = "[" + array + "]"


buscar.addEventListener('click', (event) => {
    resultado.innerHTML = `O número não foi encontrado`
    array.find((element) => {
        if (element == inputText.value) {
            resultado.innerHTML = `O número ${element} foi encontrado`
            return element
        }
    })
    inputText.value = ""
})