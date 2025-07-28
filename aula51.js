const valores = [10,8,8,2,1]
const it_valores = valores[Symbol.iterator]()

const text = "Brutal"
const it_text = text[Symbol.iterator]()

console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next())

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())


// COLEÇÕES ITERAVEIS

//ARRAYS
//STRING
//MAP
//SETS