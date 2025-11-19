import Project from "./project.js";

const ProjectController = ( () => {

    const projectList = [];

    const addProject = (name) => {
        const project = new Project(name);
        projectList.push(project);
    };

    //traditional function definition could cause some internal details to leak into global scope
    /* 
    function deleteProject(id) {

        const projectIndex = projectList.findIndex((project) => project.id === id);
        projectList.splice(projectIndex, 1);

    }
    */

    //function closures enables creation of private variables

    const deleteProject = (id) => {

        const projectIndex = projectList.findIndex((project) => project.id === id);
        projectList.splice(projectIndex, 1);

    };

    const getProjects = () => {
        return projectList;
    };

    const findProjectById = (id) => {
        return projectList.find( (project) => project.id === id);

    };

    addProject("Project 1");

    return {
        addProject,
        deleteProject,
        getProjects,
        findProjectById,
    };
    
})();

export default ProjectController;