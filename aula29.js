function aluno (nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },1000)
    }

}

const aluno1 = new aluno("Caio", 1000)
const aluno2 = new aluno("Teste", 50)

aluno1.dados_anonimo()
aluno2.dados_anonimo()