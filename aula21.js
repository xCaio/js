function nome(){
    // return "Caio"
    let n1 = 13
    let n2 = 3
    let res = n1 * n2
    if(res % 2 == 0){
        return `Par: ${res}`
    }else{
        return `Impar: ${res}`
    }
    
}

let num = nome()

console.log(num) 
// console.log(nome()) // console.log() retorna o valor da string 