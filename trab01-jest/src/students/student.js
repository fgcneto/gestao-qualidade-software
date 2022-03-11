module.exports = {

    fazerMatricula: matriculas => {
        const capacidadeDisciplina = 4
        return matriculas.length <= capacidadeDisciplina ? true : false
    },
    calculaMedia: notasAluno => {
        const notas = notasAluno.reduce((acumulador, aluno) => {
            return acumulador = ((aluno.nota1 * 4) + (aluno.nota2 * 5) + (aluno.nota3 * 6)) / 15
        }, 0)
        if(notas >= 7){
            return true
        } else{
            return false
        }
    },
    calculaPorcentagem: notasAluno => {
        let acumulador = 0
        notasAluno.forEach(element => {
            if((((element.nota1 * 4) + (element.nota2 * 5) + (element.nota3 * 6)) / 15) >= 7){
                acumulador++
            }
        });
        return ((acumulador / notasAluno.length) * 100)
    }
}