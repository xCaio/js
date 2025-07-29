 const valor1 = document.querySelector("#valor1")
 const valor2 = document.querySelector("#valor2")
 const resultado = document.querySelector("#resultado")
 const btnSoma = document.querySelector("#soma")
 const btnSubtracao = document.querySelector("#subtracao")
 
 let valores = [1,2,3,4]
 const op = [
     (valor1, valor2)=>{
        let res = Number(valor1 + valor2)
        return res
    }, 
    (valor1, valor2)=>{
        res = valor1 - valor2
        return res
    },
    (valor1, valor2)=>{
        res = valor1 * valor2
        return res
    },
    (valor1,valor2)=>{
        res = valor1/valor2
        return res
    }
 ]

btnSoma.addEventListener('click', (event)=>{
    let soma = op[0](Number(valor1.value),Number(valor2.value))
    resultado.innerHTML = soma
    valor1.value = ""
    valor2.value = ""
})
btnSubtracao.addEventListener('click', (event)=>{
    let subtracao = op[1](Number(valor1.value), Number(valor2.value))
    resultado.innerHTML = subtracao
    valor1.value = ""
    valor2.value = ""
})




//  console.log(op[2](valores))