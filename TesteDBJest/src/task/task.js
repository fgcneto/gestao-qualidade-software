module.exports = {
    createTask: (projectRepo, taskRepo, name, description, duration, isComplete, projectId) => {
        return projectRepo.getIncompletedTasks(projectId)
            .then((data) => {
                let duracaoTotal=0;
                data.forEach(row => {
                    duracaoTotal += row.duration
                });
                if (duracaoTotal >= 800) {
                    return "Refused"
                }
                else {
                    taskRepo.createTask(name, description, duration, isComplete, projectId)
                    return "Confirmed"
                }
            })
    },

    priorityTask: (projectRepo, projectId) => {
        return projectRepo.getIncompletedTasks(projectId)
            .then((data) => {
                let priority=0;
                let taskName
                if (data.length == 0) {
                    return  "O Projeto Não possui nenhuma tarefas prioritária"
                }
                data.forEach(row => {
                    if(row.duration > priority){
                        priority = row.duration
                        taskName = row.name
                    } 
                });
                return taskName
            })
    },

    hasPriority: (projectRepo) => {
        let totalTasks = 0
        return projectRepo.getAll()
            .then((data) => {
                data.forEach(row => {
                    return projectRepo.getIncompletedTasks(row.id)
                    .then((tasksincomplete) => {
                        if(tasksincomplete.length > 0){
                            totalTasks ++
                        }
                    })
                })
            return totalTasks > 0 ? "The System has no priority tasks" : "The System has priority tasks"   
            })
    }

}
 