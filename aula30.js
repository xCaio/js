const idc1 = document.getElementById('c1')
const idc2 = document.getElementById('c2')
const idc3 = document.getElementById('c3')
const idc4 = document.getElementById('c4')
const idc5 = document.getElementById('c5')
const idc6 = document.getElementById('c6')

let arrayElementos = [idc1,idc2,idc3,idc4,idc5,idc6]

//console.log(arrayElementos)

for(i of arrayElementos){
    i.innerHTML = "OK"
    console.log(i)
}

arrayElementos.map((e) =>{
    e.innerHTML = "MAP é Melhor do que usar o for"
    console.log(e)
})