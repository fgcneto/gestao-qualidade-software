const student = require('./student')

describe('Testes para sistema de Matriculas', () => {

    it('Deve retornar TRUE se houver vagas na disciplina', () => {
        const matriculas = ['Chico', 'João', 'Jose',  'Fulano']
        expect(student.fazerMatricula(matriculas)).toEqual(true)
    })

    it('Deve retornar FALSE se houver vagas na disciplina', () => {
        const matriculas = ['Chico', 'João', 'Jose',  'Fulano', 'Cicrano']
        expect(student.fazerMatricula(matriculas)).toEqual(false)
    })

    it('Deve retornar se TRUE se o aluno passar na Disciplina - NOTA IGUAL OU MAIOR QUE 7', () => {
        const notasAluno = [{name: 'Chico', nota1: 9, nota2: 7, nota3: 7}]
        expect(student.calculaMedia(notasAluno)).toEqual(true)
    })

    it('Deve retornar se FALSE se o aluno NAO passar na Disciplina - NOTA MENOR QUE 7', () => {
        const notasAluno = [{name: 'Chico', nota1: 9, nota2: 7, nota3: 5}]
        expect(student.calculaMedia(notasAluno)).toEqual(false)
    })

    it('Deve retornar o percentual dos alunos aprovados na Disciplina', () => {
        const notasAluno = [
            {name: 'Chico', nota1: 9, nota2: 7, nota3: 7},
            {name: 'Fulano', nota1: 9, nota2: 7, nota3: 5},
            {name: 'Chico', nota1: 9, nota2: 7, nota3: 7},
            {name: 'Fulano', nota1: 9, nota2: 7, nota3: 7},
            {name: 'Chico', nota1: 9, nota2: 7, nota3: 7},
            {name: 'Fulano', nota1: 9, nota2: 7, nota3: 5},
            {name: 'Chico', nota1: 9, nota2: 7, nota3: 7},
            {name: 'Fulano', nota1: 9, nota2: 7, nota3: 5},
        ]
        console.log((student.calculaPorcentagem(notasAluno)) + "%")
        })

})

