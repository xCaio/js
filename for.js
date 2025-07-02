let collections = ["Nome", 1, "StringNovamente", 10, 20, 22, 23]

for(let i =  0 ; i <collections.length; i++){
    console.log(collections[i])
}
console.log("INICIO DO FOR IN\n======");

for(i in collections){
    // console.log(`${i}: <- VALOR`);
    console.log(`${collections[i]}: <- VALOR`);   
}
console.log("INICIO DO FOR OF\n======");

for(i of collections){
    console.log(i)
}

const objs = [...document.getElementsByTagName("div")]
console.log(objs)

for(i in objs){
    console.log(objs[i].innerHTML+= "Texto adicionado")   
}

for(i of objs){
    i.innerHTML+= "ALTERADO NOVAMENTE COM FOR OF"
}