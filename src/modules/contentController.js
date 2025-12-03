import Project from "./project";

const ContentController = (() => {
    const main = document.querySelector("main");
    const projectTitle = document.createElement("h1");
    main.appendChild(projectTitle);
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "add-task-btn";
    addTaskBtn.textContent = "Add Task";
    main.appendChild(addTaskBtn);
    addTaskBtn.hidden = true;


    let activeProject = null;


    const render = (project) => {

        activeProject = project;
        main.innerHtml = "";
        projectTitle.textContent = activeProject.getName();
         addTaskBtn.hidden = false;

    }

    return {
        render,
    }
})();

export default ContentController;