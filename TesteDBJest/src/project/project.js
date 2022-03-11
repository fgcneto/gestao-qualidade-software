const { resolve } = require("bluebird");

module.exports = {
    disableProject: (projectRepo, projectId) => {
        return projectRepo.getIncompletedTasks(projectId)
            .then((data) => {
                if(data.length == 0){
                    // executar uma query para alterar campo activated para zero da Tabela
                    // projects
                    return "Project can be deactivated"
                } else {
                    return "Project cannot be deactivated"
                }
            })
    },

    priorityProject: (projectRepo, projectId) => {

        let tempoTotalIncomplete = 0
        let porcentagemTotalComplete = 0
        let qtdComplete = 0 
        let qtdIncomplete = 0
        
        return projectRepo.getCompletedTasks(projectId)
            .then((data) => {
                qtdComplete = data.length
            })
            .then(() => {
                return projectRepo.getIncompletedTasks(projectId)
            })      
            .then((data) => {
                qtdIncomplete = data.length
                porcentagemTotalComplete = parseFloat((qtdComplete*100/(qtdComplete+qtdIncomplete)).toFixed(2))
                
                data.forEach(element => {
                    tempoTotalIncomplete += element.duration
                });

                return ((porcentagemTotalComplete * 2 + tempoTotalIncomplete * 4) / 6).toFixed(2);
            })
    },
}