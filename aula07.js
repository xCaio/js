// && -> and 
// || -> or
// ! - not

// TABELA VERDADE

// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// !true -> false
// !false -> true

let n1, n2, n3, n4
n1 = 30
n2 = 20
n3 = 15
n4 = 2

console.log(n1 > n2)
console.log(n1 < n2) 
if(n1> n2 && n3 >n4){
    console.log(`${n1} é maior que ${n2} e ${n3} é maior que ${n4}, sendo assim a condição é verdadeira`)
}else{
    console.log("A condição é falsa")
}


if(n1<n2 || n3>n4){
    console.log('A condição é verdadeira')
}else{
    consolele.log("A condição é falsa")
}

if(!(n1>n2)){
    console.log("A condição é falsa, pois há um NOT")
}else{
    console.log("A condição é verdadeira, pois o NOT inverteu o resultado")
}