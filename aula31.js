const colecaoHTML =[... document.getElementsByTagName("div")]

console.log(colecaoHTML)
colecaoHTML.map((e) =>{
    e.innerHTML = `<h1>Olá mundo</h1>`
})