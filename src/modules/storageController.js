import ProjectController from "./projectController"

const StorageController =  ( () => {

    const storeProjects = () => {
        const projectList = ProjectController.getProjects();
        localStorage.setItem("projects", JSON.stringify(projectList));
    };

    const restoreProjects = () => {
        const localProjects = JSON.parse(localStorage.getItem("projects"));
        if(!localProjects) return;
        
    }

})