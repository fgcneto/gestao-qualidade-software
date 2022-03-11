const task = require('./task')
const Promise = require('bluebird')

const AppDAO = require('../../src/db/dao')
const ProjectRepository = require('../../src/project/project_repository')
const TaskRepository = require('../../src/task/task_repository')
const { resolve } = require('bluebird')

let dao
let projectRepo
let taskRepo

describe('Análise das tarefas', () => {

    beforeAll(() => {
        return new Promise((resolve, reject) => {
            dao = new AppDAO('../../database.db');
            resolve()
        }).then(() => {
            projectRepo = new ProjectRepository(dao);
            taskRepo = new TaskRepository(dao);
            resolve()
        }).then(() => {
            resolve()
        })
    })

    it ('Deve RECUSAR criação de tarefa no projeto de id 1 (ultrapassou 800 minutos)', () => {
        const name = "Tarefa recusada"
        const description = "Essa tarefa tentará ser adicionada em um projeto que possui 800 minutos de duração, e não será adicionada"
        const duration = 120
        const isComplete = 0
        const projectId = 1
        return (task.createTask(projectRepo, taskRepo, name, description, duration, isComplete, projectId))
            .then((data) => expect(data).toBe('Refused'));
    }),

    it ('Deve retornar a tarefa prioritária (APENAS TAREFAS INCOMPLETAS) com Maior Duração', () => {
        const projectId = 3
        return (task.priorityTask(projectRepo, projectId))
            .then((data) => expect(data).toBe("O Projeto Não possui nenhuma tarefas prioritária"));
    }),

    it ('Deve retornar a tarefa prioritária (APENAS TAREFAS INCOMPLETAS) com Maior Duração', () => {
        const projectId = 1
        return (task.priorityTask(projectRepo, projectId))
            .then((data) => expect(data).toBe("Task 1"));
    }),

    it('Deve retornar "The System has priority tasks" quando algum projeto do sistema possuir tarefas incompletas', () => {
        return (task.hasPriority(projectRepo))
            .then((data) => expect(data).toBe("The System has priority tasks"));
    })

})