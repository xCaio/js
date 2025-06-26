/* PROMPTS para o USUÁRIO */
 let nome = prompt("Digite seu nome: ")
 console.log(nome)


/* Comparações usando o operador lógico NOT (!)*/
let n1 = 1
let n2 = 2
console.log(n1 != n2) // true
console.log(!(n1 != n2)) // false


/* Verificando se o usuário está usando um dispositivo móvel
ou um computador*/

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/Blackberry/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log("Você está usando um dispositivo móvel.")
}   else {
    console.log("Você está usando um computador")
}


/*O DEFER faz com que o Javascript seja carregado em paralelo com o HTML, assim podendo ficar no head da pagina */
//<script src="aula06.js" defer></script>