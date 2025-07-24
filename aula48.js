const p_array = document.querySelector("#textArray")
const buscar = document.querySelector("#buscar")
const resultado = document.querySelector("#resultado")


const array = [21, 25, 19, 20, 22, 18, 23]
p_array.innerHTML = "[" + array + "]"


buscar.addEventListener('click', (event) => {
   const retorno = array.every((element, index) =>{
        
    if(element >=18){
        resultado.innerHTML = "A condição é verdadeira"
    }else{
        
        resultado.innerHTML = "A condição é falsa"
    }

    return element
}
)})

// buscar.addEventListener('click', (event)=>{
//     array.filter((element)=>{
//         resultado.innerHTML = "Array não conforme"
//         if(element >= 18){
//             console.log(element)

//         }
        
//     })
// })