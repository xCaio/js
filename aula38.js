const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelectorAll(".curso")

// console.log(caixa1.children[caixa1.children.length-1])
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)

//NÓ RAIZ  -  ROOT NODE

console.log(btn_c1[0].getRootNode())
console.log(btn_c1[0].ownerDocument)
