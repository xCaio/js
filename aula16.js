const objs = [...document.getElementsByTagName("div")]

let num = [10,20,30,40,50,60]

console.log("ESTRUTURA FOR");

for(let i = 0; i < num.length; i++){
    console.log(i) // IMPRIMINDO A POSIÇÃO DO ELEMENTO i
}

for(let i = 0; i < num.length; i++){
    console.log(num[i]) // IMPRIMINDO OS NUMEROS QUE ESTAO NA POSIÇÃO i DO ARRAY
}

console.log("ESTRUTURA FOR IN")
for(n in num){
    console.log(n);
    
}
for(n in num){
    console.log(num[n]);
    
}

console.log("FOR OF")

for(n of num){  // IMPRIMINDO OS ELEMENTOS DIRETAMENTE COM O FOR OF
    console.log(n)  //10,20,30,40,50,60
}

console.log(objs)

for(i in objs){
    console.log(i);
    
}
for(i of objs){
    console.log(i)
    i.innerHTML+="Alterado todos de uma vez no loop"
}

for(i in objs){
    console.log(objs[i])
}