import ProjectController from "./projectController.js"
import Project from "./project.js"

const StorageController =  ( () => {

    const storeProjects = () => {
        const projectList = ProjectController.getProjects();
        localStorage.setItem("projects", JSON.stringify(projectList));
    };

    const restoreProjects = () => {
        const localProjects = JSON.parse(localStorage.getItem("projects"));
        if(!localProjects) return;
        localProjects.forEach( (project, index) => {
            const name = project.name;
            const tasks = project.taskList;
            ProjectController.addProject(name);
            const currentProject = ProjectController.getProjects()[index];

           
            tasks.forEach((task, index2) => {
                currentProject.addTask(
                    task.title, 
                    task.description,
                    task.duDate,
                    task.priority 
                );
                console.log("task name: " + task.name);
             if(task.completed) currentProject.getTaskList()[index2].toggle();
            });

        })

    };

    return {
        storeProjects,
        restoreProjects
    };

})();

export default StorageController;