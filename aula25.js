const soma = (...values) =>{
    let res = 0
    for(i of values){
        res+=i
    }
    return res
}

const names = n => {return n}
const name = n => n

console.log(name("caio retornando direto"))
console.log(names("caio"))

console.log(soma(1,2,3,4,5))