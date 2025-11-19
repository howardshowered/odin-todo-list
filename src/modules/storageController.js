import ProjectController from "./projectController"

const StorageController =  ( () => {

    const storeProjects = () => {
        const projectList = ProjectController.getProjects();
        localStorage.setItem("projects", JSON.stringify(projectList));
    };

})