import Project from "./project";

const ContentController = (() => {
    const main = document.querySelector("main");
    const projectTitle = document.createElement("h1");
    main.appendChild(projectTitle);

    let activeProject = null;


    const render = (project) => {

        activeProject = project;
        main.innerHtml = "";
        projectTitle.textContent = activeProject.getName();

    }

    return {
        render,
    }
})();

export default ContentController;