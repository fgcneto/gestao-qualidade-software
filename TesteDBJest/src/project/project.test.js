const project = require('./project')
const Promise = require('bluebird')

const AppDAO = require('../../src/db/dao')
const ProjectRepository = require('../../src/project/project_repository')
const TaskRepository = require('../../src/task/task_repository')
const { resolve } = require('bluebird')

let dao
let projectRepo
let taskRepo

describe('Análise dos projetos', () => {
    
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

    it ('Deve retornar "Project can be deactivated" para projetos com tarefas completas', () => {
        const projectId = 3
        return (project.disableProject(projectRepo, projectId))
                .then((data) => expect(data).toBe('Project can be deactivated'));
    })

    it ('Deve retornar "Project cannot be deactivated" para projetos com tarefas incompletas', () => {
        const projectId = 2
        return (project.disableProject(projectRepo, projectId))
                .then((data) => expect(data).toBe('Project cannot be deactivated'));
    })

    it ('Deve retornar a prioridade de um Projeto', () => {
        const projectId = 2
        return (project.priorityProject(projectRepo, projectId))
                .then((data) => expect(data).toBe("291.11"))
    })
   
})