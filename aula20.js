function nome(){
    console.log("Iniciando função")
}
nome()
for(let i = 0; i < 10; i++){
    nome()
}
function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")

    d1.innerHTML="Mudando a primeira div"
    d2.innerHTML="Mudando a segunda div"
    d3.innerHTML="Mudando a terceira div"
}
