const caixa = document.querySelector("#caixa")

const musicas = new Set(["Gangway", "Evil Jordan", "BACKR00M"])

console.log(musicas.values())
musicas.add("Gangway")

console.log(musicas.values())

musicas.delete("BACKR00M")
musicas.forEach((el)=>{
    caixa.innerHTML += el+"<br/>"
})
